import React from 'react'
import { ListItem, Icon } from '@ui-kitten/components';
import firestore from '@react-native-firebase/firestore';

const Todo = ({id, title, complete}) => {

    async function toggleComplete(){
        await firestore()
            .collection('todo')
            .doc(id)
            .update({
                complete: !complete
            })
    }
    const CheckIcon = (props) => (
        <Icon name={complete ? 'checkmark' : 'close'} {...props} />
      );
    return (
        <ListItem
            title={title} 
            accessoryLeft={CheckIcon}    
            onPress={() => toggleComplete()}
        />
    )
}

export default React.memo(Todo)
