# Analog Clock Widget
This is a Jquery Analog Clock Plugin.

## Getting Started
1. Download the file - https://github.com/harshit-sinha-developer/jq-clock/blob/master/dist/bundle.js  
2. Include it in your scripts
```
<script  src="dist/bundle.js"></script>
```
3. Make a div in html
```
<div  id="myClock"></div>
```
4. Pass the div to ClockWidget initialisation
```
<script>
let  clock = new  ClockWidget.ClockApp(document.getElementById('myClock'), { width:  500, height:  500, radius:  200, watchFace:  'FACE_3' });
</script>
```

## Usage
### Configuration
Pass configurations to the widget while initialization
```
const config = { width:  500, height:  500, radius:  200, watchFace:  'FACE_3' };
let clock = new ClockWidget.ClockApp(document.getElementById('myClock'), config);
```
#### Suported Properties
<table>
   <thead>
      <tr>
         <th>Property Name</th>
         <th>Description</th>
         <th>Default</th>
         <th>Type / Supported Values</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>width</td>
         <td>Width of the clock canvas in pixel</td>
         <td>300</td>
         <td>Number</td>
      </tr>
      <tr>
         <td>height</td>
         <td>Height of the clock canvas in pixel</td>
         <td>300</td>
         <td>Number</td>
      </tr>
      <tr>
         <td>color</td>
         <td>Background color of the clock</td>
         <td>'#FFFFFF'</td>
         <td>String (Hexcode)</td>
      </tr>
      <tr>
         <td>radius</td>
         <td>Clock Radius</td>
         <td>Math.min(this._canvasWidth, this._canvasHeight) / 2 - 10</td>
         <td>Number</td>
      </tr>
      <tr>
         <td>isBorderFilled</td>
         <td>whether the clock border is to be filled with color</td>
         <td>true</td>
         <td>boolean</td>
      </tr>
      <tr>
         <td>watchFace</td>
         <td>Watch Face selected from a list of predefined watchFaces</td>
         <td>'FACE_1'</td>
         <td>'FACE_1', 'FACE_2', 'FACE_3'</td>
      </tr>
      <tr>
         <td>faceConfig</td>
         <td>Custom Watch faceconfig</td>
         <td>FACE_1 config</td>
         <td>Object</td>
      </tr>
      <tr>
         <td>displayTime</td>
         <td>Time to display on the clock initially</td>
         <td>Current time</td>
         <td>Date Object</td>
      </tr>
      <tr>
         <td>displayConstantTime</td>
         <td>When set to true displays a constant time on the watch (displayTime)</td>
         <td>false</td>
         <td>boolean</td>
      </tr>
   </tbody>
</table>

## Contributing
### Prerequisites
1. Node.js is a prerequisite [refer](https://nodejs.org/en/)
2. Make sure webpack is installed
```
npm install webpack -g
```

## Built With
*  [npm](https://docs.npmjs.com/misc/registry) - The package manager user

* Local Build -
```
npm start
```

* Production Build
```
npm run build
```

* Run Local Server
```
npm run start:server
```

## Versioning
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors
*  **Harshit Sinha** - *Initial work* - [Github](https://github.com/harshit-sinha-developer)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details