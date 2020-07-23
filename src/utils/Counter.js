import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import PropTypes from 'prop-types';

export default class Counter extends Component {

    static propTypes = {
        decrementFn: PropTypes.func.isRequired,
        incrementFn: PropTypes.func.isRequired,
    };

    render() {

        const {decrementFn, incrementFn, counter} = this.props;
        return (
            <View style={styles.container}>
                <Button
                    title={'减'}
                    onPress={decrementFn}/>

                <Text style={styles.label}>
                    {counter}
                </Text>

                <Button
                    title={'加'}
                    onPress={incrementFn}/>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    label: {
        width: 40,
        textAlign: 'center',
    }
});
