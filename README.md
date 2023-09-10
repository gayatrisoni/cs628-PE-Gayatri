# PE01-
# "Resume Web App using react"

# Input: 
The program takes the user information as an input. This information includes the Name, contact information, education, skills, work experience, and projects. We can provide input through a form or directly modifying in the code.

# process: 
The program process the input data to generate the resume. It uses the react componenet and JSK to structure and render the resume content. The programme contains two file Resume.js and Resume.css . The Resume.js component, which is responsible for organizing the input data into appropriate sections, such as education, skills, work experience, and projects. It uses HTML tags like headings (h1, h2, h3) and paragraphs (p) to format the content while the CSS styles defined in Resume.css are applied to provide visual presentation, including background color, spacing, and font sizes.

# Output
The output of the program is a web app that displays the resume. The user's name and contact information are shown at the top, followed by sections for education, skills, work experience, and projects. Each section displays the relevant details in a readable manner, utilizing headings and paragraphs. The web app presents the resume to the user, making it easy to read and share.

# Conclusion:
In conclusion, the program follows the Input-Process-Output model by taking resume information as input, processing it using React components and JSX, and generating a web app as the output, which displays the formatted resume.



# PE02-
# Movie List React Application 

# Input:
The program takes input in the form of an array of movie objects. Each movie object contains properties such as title, genre, and release year. In addition, the user can select a genre from a dropdown menu to select element to filter the movies based on the selected genre.

# Process:
The program processes the input data and it utilizes React's stateful components and hooks to handle the movie list and the user-selected genre.  It uses JSX syntax for rendering the component markup and expressions for dynamic data rendering.The user can further interact with the application by selecting a specific genre from the provided dropdown menu. If the user chooses "All Genres," the program displays all the movies.

# Output:
The program renders the list of movies as separate movie cards. Each card displays the movie title, genre, and release year in a neatly arranged format. The movie cards are centered on the page but start from the left side, When the user clicks on a movie, an alert displays the movie title.


# PE05-
# Recipe React Application 

# Input:
The application is designed to manage recipes. The inputs are provided through user interface where user can enter new recipe and view existing reipe. To create a new recipe, user need to enter details like recipe name, Image url, Ingredients, Instructions etc. User can modify existing recipe details by editing recipe details. Furthermore, user can delete a recipe using delete button. 

# Process:
The program utilizes a react based front end for user interface and express based backend server to handle data management. The server used mongoDB database to store and retrive recipe information and routes handle various http request to interact with database. the programe send a request to the server while adding or editing recipe, which then stores and update the recipe information in database and then programe fetches data from the server and render the information in the user interface when viewing recipes.

# Output:
The programe provides output in the form user can interact with the application, where user can see list of recipe, add recipe, modify  existing recipe and delete recipe. User can see details of each recipe like name, Image url, ingredient, instruction. The prograe also send alert while performing operation like editing, adding recipe.



