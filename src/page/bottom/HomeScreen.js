import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    View,
    Text,
    TextInput,
    FlatList,
    Alert,
    TouchableHighlight,
    StatusBar,
    RefreshControl,
    Platform,
    AsyncStorage,
    AppState
} from 'react-native';

import Swiper from 'react-native-swiper';
import {Container, Header, Content, Left, Body, Right, Button, InputGroup, Icon, Input, Title} from 'native-base';
import  Screen from '../../utils/Screen'

const URL = "https://api.douban.com/v2/movie/in_theaters";
export default class HomeScreen extends Component {

    static navigationOptions = {
        tabBarLabel: '首页',
        tabBarIcon: ({focused, horizontal, tintColor}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../../../images/tab_home_pressed.png')}/>
                );
            }

            return (
                <Image style={styles.tabBarIcon} source={require('../../../images/tab_home_normal.png')}/>
            );

        }

    };


    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            searchText: '',
            advertisements: [
                {
                    image: require('../../../images/ad_one.jpg')
                }, {
                    image: require('../../../images/ad_two.jpg')
                }, {
                    image: require('../../../images/ad_three.jpg')
                }
            ],
            productData: [],
            loaded: false,
            isRefreshing: false,
            currentAppState: AppState.currentState,  // app状态
        };


        // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
        // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        this._fetchData = this._fetchData.bind(this);
    }

    componentDidMount() {
        this._fetchData(URL, {apikey:'0df993c66c0c636e29ecbb5344252a4a',city: '北京', start: '0', count: '100'});
        AppState.addEventListener('change', this._handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change',this._handleAppStateChange );
    }


    _fetchData(url, params) {
        if (params) {
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]));
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }

        }

        fetch(url)
            .then((response => response.json()))
            .then(responseData => {
                console.log('result=='+JSON.stringify(responseData));
                AsyncStorage.setItem('product',JSON.stringify(responseData));
                this.setState({
                    productData: this.state.productData.concat(responseData.subjects),
                    loaded: true,
                });
            }).catch((err)=>{
                AsyncStorage.getItem('product').then((value)=>{
                    this.setState({
                        productData: this.state.productData.concat(value.subjects),
                        loaded: true,
                    });
                })
        });
    }

    _handleAppStateChange=(nextAppState)=>{
        if (nextAppState==='inactive' || nextAppState==='background'){
            console.log('应用进入后台');
        } else if (nextAppState==='active'){
            console.log('应用进入前台');
        }

        this.setState({currentAppState:nextAppState});
    };


    render() {

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name={'arrow-back'}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>首页</Title>
                    </Body>

                    <Right>
                        <Button transparent>
                            <Icon name={'search'}/>
                        </Button>
                    </Right>

                </Header>

                <Content
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}/>
                }>
                    <Swiper style={styles.advertisement}
                            loop={true}
                            height={190}
                            autoplay={true}
                            showButtons={true}>
                        {this.state.advertisements.map((advertisement, index) => {
                            return (
                                <TouchableHighlight key={index}
                                                    onPress={() => Alert.alert('你点击了轮播', null, null)}>

                                    <Image style={styles.advertisementContent}
                                           source={advertisement.image}>

                                    </Image>


                                </TouchableHighlight>
                            );
                        })}
                    </Swiper>

                    <FlatList
                        data={this.state.productData}
                        renderItem={this.renderProduct}
                        ItemSeparatorComponent={this._renderItemSeparatorComponent}
                    />
                </Content>
            </Container>


        );
    }




    renderProduct({item}) {
        return (
            <View style={styles.productContainer}>

                <Image style={styles.productImage}
                       source={{uri: item.images.medium}}/>

                <View style={styles.productRight}>
                    <Text style={styles.productTitle}>{item.title}</Text>
                    <Text style={styles.productDesc}>{item.year}</Text>
                </View>

            </View>
        );

    };

    _renderItemSeparatorComponent = () => {
        return (
            <View style={styles.divider}></View>
        );
    };

    _onRefresh = () => {
        this.setState({refreshing: true});
        // this._fetchData().then(()=>{
        //     this.setState({refreshing: false});
        // });
         setTimeout(() => {
             this.setState({refreshing: false});
         }, 2000)
    };


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBarIcon: {
        width: 19,
        height: 19,
    },
    searchbar: {  // 搜索框样式
        marginTop: Platform.Os === 'ios' ? 20 : 0,
        height: 40,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    advertisement: {        // 轮播广告
        height: 190,
        justifyContent: 'center',
        alignItems: 'center'
    },


    products: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    productContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    productImage: {
        width: 30,
        height: 40,
        marginLeft: 10
    },
    productRight: {
        flex: 1
    },
    productTitle: {
        fontSize: 20,
        marginLeft: 20,
        textAlign: "center"
    },
    productDesc: {
        textAlign: "center"
    },
    divider: {
        height: 1,
        backgroundColor: 'lightgray'
    },
    input: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10,
    },
    button: {
        flex: 1
    },
    item: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    advertisementContent: {
        width: Screen.width,
        height: 190
    },
});