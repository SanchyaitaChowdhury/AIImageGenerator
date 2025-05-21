<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Define the character encoding and viewport settings -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Page title -->
    <title>
      AI Image generator Website using HTML, CSS and JavaScript
    </title>
    
     <style>

body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.main-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    padding: 20px;
    border: 2px solid #ccc;
    width: 50%;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
}

.heading {
    color: #318C46;
}

.headings-container {
    text-align: center;
    color: #000;
}

.form-controls {
    padding: 10px;
    border-radius: 5px;
    border: none;
}

.form-input:focus {
    outline: none;
}

.image-generate-btn {
    background-color: #318C46;
    cursor: pointer;
    color: #fff;
}

#imageContainerText {
    color: #000;
}

.image-container {
    margin: 50px 0;
    display: none;
    text-align: center;
}

.my-generated-image {
    width: 100%;
    height: 350px;
}

@media screen and (min-width: 280px) and (max-width: 920px) {
    .container {
        width: 100%;
    }

    .my-generated-image {
        width: 100%;
        height: 300px;
    }
}
    </style>
    
</head>

<body>
    <!-- Main container for all the content -->
    <div class="main-container">

        <!-- Container for the heading and form -->
        <div class="container">
            
            <!-- Section for page headings -->
            <div class="headings-container">
                <h1>AIRandomImage</h1> <!-- Main heading -->
                <h2 class="heading">
                  	AI Image generator website using JavaScript
                </h2> <!-- Secondary heading explaining the purpose -->
                <h5 class="sub-heading">
                  Enter the text in the below input bar and 
                  <br />
                  get the AI generated image related to this text.
                </h5> <!-- Subheading with instructions -->
            </div>

            <!-- Form container for input and submit button -->
            <div id="generate-image-form" class="form-container">
                
                <!-- Form to input text and generate image -->
                <form class="my-form">
                    <!-- Text input for the user to enter some text -->
                    <input id="input-value" 
                           placeholder="Enter some text..." 
                           type="text"
                           class="form-input form-controls">

                    <!-- Button to submit and generate image -->
                    <button type="submit" 
                            class="image-generate-btn 
                                   form-controls">
                      	Generate Image
                    </button>
                </form>
            </div>

            <!-- Section to display the generated image -->
            <div id="images-visible" class="image-container">
                <!-- Placeholder text that will be updated with the result -->
                <p id="imageContainerText"></p>
                
                <!-- Image tag to display the AI generated image -->
                <img id="generated-image" 
                     class="my-generated-image" 
                     src='' alt="AI Generated Image">
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>

</html>