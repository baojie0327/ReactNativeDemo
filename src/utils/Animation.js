import React, {Component} from 'react';
import {View, Text, StyleSheet, LayoutAnimation, Animated,Image,Easing} from 'react-native';

export default class Animation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: parseInt(this.props.width),
            height: parseInt(this.props.height),
            bounceValue: new Animated.Value(0),
            rotateValue: new Animated.Value(0)
        }
    }

    componentDidMount() {
        this._startAnimationa();
    }

    componentDidUpdate() {
        //  this._startAnimationl();
    }


    _startAnimation = () => {
        let count = 0;
        while (++count < 100) {
            requestAnimationFrame(() => {
                this.setState({
                    width: this.state.width + 1,
                    height: this.state.height + 1
                });
            });
        }
    };

    _startAnimationl = () => {
        LayoutAnimation.configureNext({
            duration: 800,                          // 持续时间
            create: {                // 创建组件动画
                type: LayoutAnimation.Types.spring,   // 弹跳
                property: LayoutAnimation.Properties.scaleXY,  // 缩放
            },
            update: {              // 更新组件动画
                type: LayoutAnimation.Types.spring,
            }
        });

        this.setState({
            width: this.state.width + 100,
            height: this.state.height + 100
        });

    };

    _startAnimationa = () => {
        Animated.sequence([
            Animated.spring(this.state.bounceValue,{toValue:2} ),
            Animated.delay(500),
            Animated.timing(this.state.rotateValue,{
                toValue: 1,
                duration: 800,
                easing: Easing.out(Easing.quad)
            } )
        ]).start();
    };


    render() {
        return (
            <Animated.View style={[View, styles.animation, {
                width: this.state.width, height: this.state.height,
                transform: [
                    {
                        scale: this.state.bounceValue
                    },
                    {
                        rotate:this.state.rotateValue.interpolate({
                            inputRange:[
                                0,1
                            ],
                            outputRange:['0deg','360deg']
                        })
                    }
                ]
            }]}>

                <Image source={require('../../images/ad_one.jpg')}
                style={{width:this.state.width,
                height:this.state.height}}></Image>
            </Animated.View>
        );
    }


}

const styles = StyleSheet.create({
    animation: {
        backgroundColor: 'red'
    }
});