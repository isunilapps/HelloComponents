import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Blink extends Component {

    constructor(props) {
        super(props);

        this.state = {isShowingText: this.props.enable};

        if (!this.props.enable) {
            this.state = {isShowingText: true}
        }


        // Toggle the state every second
        setInterval(() => {
            this.setState(previousState => {
                if (this.props.enable) {
                    return { isShowingText: !previousState.isShowingText };
                }
                else {
                    return { isShowingText: true };
                }
            });
        }, 550);
    }

    render() {
        let display = this.state.isShowingText ? this.props.text : ' ';
        return (
            <Text>{'\n'}{display}{'\n'}</Text>
        );
    }
}

export default class BlinkApp extends Component {
    render() {
        return (
            <View>
                <Blink text='I do not like blinking stuff' enable={false}/>
                <Blink text='Yeah, I love to watch blinking text. Its fun.' enable={true}/>
                <Blink text='This is for the developers who do not like blink' enable={false}/>
                <Blink text='Look at me, look at me, This is for the developers who like blink' enable={true}/>
            </View>
        );
    }
}