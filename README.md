# Neumorphism - CSS

Neumorphism is an interesting component, giving a real popup effect on a website, giving a minimal look.  
Light Mode and Dark Mode both are included in this version. 
Here are some examples.  
  
  
<img src="/img/lightmode.png" alt="Light Mode" style="height: 219px; width:400px;"/>  

<img src="/img/darkmode.png" alt="Dark Mode" style="height: 219px; width:400px;"/>  
  
 
## How to Use

Clone this repository, add *Neumorphism.css* to your *css* folder and *Neumorphism.js* to your *js* folder or use CDN Links.  
CDN for CSS File:  
``<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/romeo611199/neumorphism-css/dist/css/neumorphism.min.css">``  

CDN for JS Files:  
``<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>``  

``<script src="https://cdn.jsdelivr.net/gh/romeo611199/neumorphism-css/dist/js/neumorphism.min.js"></script>``  


## Usage

For Light Mode, add *light* class to your parent tag. This will add a light grey background color (#f2f2f2)    
``<body class="light">``  

  
For Dark Mode, add *dark* class to your parent tag. This will add a dark grey background color (#383838)  
``<body class="dark">``  
  

To apply Neumorphism to an element, specify the type of Neumorphism by adding classes as:  
``<div class="neumorphism-outer"></div>``  

``<div class="neumorphism-inner"></div>``  

This will add a default style to your element - a basic Neumorphism Container.  

To customize the style, there are 7 parameters which you can play with in your design.  
1. x -> Defines the horizontal offset (will remain same for both light and dark)
2. y -> Defines the vertical offset (will remain same for both light and dark)
3. b -> Defines the blur radius for both light and dark shadows.
4. l-opac -> Defines the opacity of the color for light. (Range: 0.0 to 1.0)
5. s-opac -> Defines the opacity of the color for shadows. (Range: 0.0 to 1.0)
6. light -> Defines the color of light in HexCode (Format: #ffffff)
7. shadow -> Defines the color of shadow in HexCode (Format: #000000)

Customized Usage:  
`` <div class="neumorphism-outer" x="10" y="10" b="10" l-opac="1.0" s-opac="0.2" light="#fafafa" shadow="#000000"></div>``  


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://github.com/romeo611199/neumorphism-css/blob/master/LICENSE)
