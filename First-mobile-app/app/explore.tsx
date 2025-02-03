import { StyleSheet, Image, Platform, View,Text } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function Explore(){
    return (
        <View style={styles.view}>
            <Text style={styles.text}>
                OK let put some text in it
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  view:
  {
    backgroundColor:"blue",
    margin: 50,
    padding: 25,
  },
  text:{
    color: "red",
    fontSize:22,
  }
});
