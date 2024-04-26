import React, { useRef } from 'react';
import { Animated, View, Text, Button } from 'react-native';

const SequenceAnimation = () => {
  const fadeInAnim = useRef(new Animated.Value(0)).current;
  const translateAnim = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.sequence([
      // First animation: Fade in
      Animated.timing(fadeInAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      // Second animation: Translate to the right
      Animated.timing(translateAnim, {
        toValue: 100,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const resetAnimation = () => {
    // Reset both animated values
    Animated.parallel([
      Animated.timing(fadeInAnim, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(translateAnim, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        style={{
          opacity: fadeInAnim, // Bind opacity to animated value
          transform: [{ translateX: translateAnim }], // Bind translation to animated value
        }}>
        <Text style={{ fontSize: 24 }}>Hello, React Native!</Text>
      </Animated.View>
      <View style={{ marginTop: 20 }}>
        <Button title="Start Animation" onPress={startAnimation} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button title="Reset Animation" onPress={resetAnimation} />
      </View>
    </View>
  );
};

export default SequenceAnimation;
