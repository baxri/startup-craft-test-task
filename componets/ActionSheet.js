import React, { useRef, useEffect, useState } from "react";
import {
  StyleSheet,
  Easing,
  TouchableOpacity,
  PanResponder,
  ScrollView,
} from "react-native";
import Animated from "react-native-reanimated";

// Max height for actionsheet content
const MAX_HEIGHT = 400;

// Duration for animations
const DURATION = 100;

// you need to move min 30 px down to close actionsheet
const DELAY = 30;

export default function ActionSheet(props) {
  const transform = useRef(new Animated.Value(MAX_HEIGHT));
  
  const [height, setHeight] = useState(MAX_HEIGHT);
  const [offset, setOffset] = useState(0);

  const handlePanResponderMove = (e, gesture) => {
    // We need this check to up move and to resolve conflict with scrollview
    if (gesture.dy > 0 && offset <= 0) {
      transform.current.setValue(gesture.dy);
    }
  };

  const handlePanResponderRelease = (e, gesture) => {
    // Avoid conflict with scrollview gestures
    if (offset > 0) {
      return false;
    }

    // You need to move min 30px to make swipe close
    if (gesture.dy > DELAY) {
      props.onClose();
    } else {
      // Othervise it go back to original position
      Animated.timing(transform.current, {
        toValue: 0,
        duration: DURATION,
        easing: Easing.linear,
      }).start();
    }
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      // Pan responder only works when there is no scroled content
      if (offset === 0 && gestureState.dy > 0) {
        return true;
      }

      return false;
    },
    onPanResponderMove: handlePanResponderMove,
    onPanResponderRelease: handlePanResponderRelease,
  });

  useEffect(() => {
    // Monitor isOpen prop and do animation when it chages
    Animated.timing(transform.current, {
      toValue: props.isOpen ? 0 : height,
      duration: DURATION,
      easing: Easing.linear,
    }).start();
  }, [props.isOpen]);

  const zIndex = Animated.interpolate(transform.current, {
    inputRange: [0, height],
    outputRange: [1, -1],
  });

  const opacity = Animated.interpolate(transform.current, {
    inputRange: [0, height],
    outputRange: [0.4, 0],
  });

  return (
    <>
      <Animated.View style={{ ...s.background, zIndex, opacity }}>
        <TouchableOpacity
          onPress={props.onClose}
          style={{ ...StyleSheet.absoluteFill }}
        ></TouchableOpacity>
      </Animated.View>
      <Animated.View
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout;
          const h = height > MAX_HEIGHT ? MAX_HEIGHT : height;
          transform.current.setValue(h);
          setHeight(h);
        }}
        style={{
          ...s.container,
          transform: [{ translateY: transform.current }],
          zIndex: 1000,
        }}
        {...panResponder.panHandlers}
      >
        <ScrollView
          style={s.buttonContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
          onScroll={(event) => setOffset(event.nativeEvent.contentOffset.y)}
        >
          {props.children}
        </ScrollView>
      </Animated.View>
    </>
  );
}

const s = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    padding: 16,
    maxHeight: MAX_HEIGHT,
  },
  background: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "#000000",
  },
});
