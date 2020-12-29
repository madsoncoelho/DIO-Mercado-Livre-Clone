import React from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Button(props) {
    return (
        <TouchableOpacity style={props.style == 'outline' ? 
            styles.outlinedPrimaryButton : styles.primaryButton}
            onPress={props.onPress}>
            {props.children}
        </TouchableOpacity>
    );
}