# StartupCraft ReactNative developer test task

This is a repository containing a test task for React Native developer to join StartupCraft.

## Main Task

You need to follow the visual example of expected result provided below:
<img src="https://github.com/StartupCraft/rn-task-listsheet/blob/master/assets/example.gif" width="200" />

### General Requirements
- As a result of taping picker in the top, the bottom menu should show up like in the example. By selecting an option "Availabilities" or "Preferences" the picker should change the selected value
- Cancel simply closes the bottom menu
- Please record video of the process of writing a code + commenting in the background and upload to GoogleDrive/Dropbox

### Technical Requirements
1. Behaviour
   1. should gracefully support iPhone X home indicator space
   1. should be closeable by pressing on both overlay and "Cancel" button
   1. should have scrollable option list if `maxHeight` prop is less than component's content height (including bottom space & cancel button).
1. Animations
   1. overlay opacity animation from 0 to 0.4 `#000000`
   1. component's content should slide in/out with the same speed (100ms) both for 1 and for 50 options
1. Advanced
   1. should be closeable by swiping component's content down

### Constraints
You are free to use any library you want (exception is ready-to-use list sheet components). Use only functional components & react hooks. 

### Delivery of the code
The task will be considered as completed when you fulfill all the requirements and send the final code in a Gist or through CodePen or similar apps (though no references should be to this folder) and video showcasing code process as a link to your DropBox or GoogleDrive.

All results should be sent to info@startupcraft.io email

Good luck!
