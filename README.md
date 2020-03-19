You are free to use any library you want (exception is ready-to-use list sheet components). Use only functional components & react hooks. Good luck!:P

Technical requirements for the component:

1. Behaviour
   1. should gracefully support iPhone X home indicator space
   1. should be closeable by pressing on both overlay and "Cancel" button
   1. should have scrollable option list if `maxHeight` prop is less than component's content height (including bottom space & cancel button).
1. Animations
   1. overlay opacity animation from 0 to 0.4 `#000000`
   1. component's content should slide in/out with the same speed (100ms) both for 1 and for 50 options
1. Advanced
   1. should be closeable by swiping component's content down
 

![Image of Yaktocat](https://github.com/StartupCraft/rn-task-listsheet/blob/master/assets/example.gif)
