# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer:
    You can add the foreign key by creating a column called animal_id with datatype interger and migrate changes. The foreign key would be in the Sightings model.
  Researched answer:
    To fix this you would need to run rails g migration and edit the migration file with an animal_id column. After changes we you can run rails db:migrate to adopt into the schema.

2. Which RESTful API routes must always be passed params? Why?

  Your answer:
  The GET path to show a specific database entry, the GET path to show an entry to edit, the PUT path to update an entry, and the DELETE path to destroy an entry. These all need to be passed params because you are working with a specific entry that needs to be identified with a primary key.
  Researched answer:



3. Name three rails generator commands. What is created by each?

  Your answer:
    Three rails generator commands are: 1. generate controller which adds a controller file. 2. generate model which makes a model with chosen name and key:datatype pairs. 3. generate scaffold which makes a template of a model.
  Researched answer:
    The rails generate controller command generates a controller file, a view file, a functional test file, a helper for the view, a JavaScript file, and a stylesheet file.


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students          
-index: Used to show all the data in the table
method="POST"   /students       
-create: updates the table with a new entry
method="GET"    /students/new
-new: used to display form (database not updated yet)
method="GET"    /students/2  
-show: show a specific database entry
method="GET"    /students/edit/2    
-edit: pulls existing database entry to be updated
method="PATCH"  /students/2      
-update: makes changes to database entry with updated data
method="DELETE" /students/2      
-destroy: deletes selected entry


5. As a developer, you want to make an application that will help you manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a developer I can generate a task_list model in the database.
As a developer I can migrate a model with task:string description:string and status:string.
As a user I can see a list of all the tasks.
As a user I can add a new task.
As a user I can update a task to complete.
As a user I am redirected to the show task page which was updated.
As a user I can delete a task.
As a user after I delete a task I am redirected to the index.
As a user I can only access strong params.
