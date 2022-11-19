# Lab 8 - Starter
Names: Pranav Puttaparthi, Jackie Sun

1. Where would you fit your automated tests in your Recipe project development pipeline?

   I would fit them within a Github action that runs whenever code is pushed (choice 1). According to the Intro for this lab, it's a very recent development in software testing practices to automatically test software on certain events, one of them being when code is pushed to a remote repository. Manually running tests locally before pushing code is a very good practice, but it doesn't answer the question of where to fit automated tests. And running them all after all development is completed will leave us way too overwhelmed with all-over-the-place errors, especially if we refrain from manually testing code.
   
2. No

3. I would not use a unit test to test the "message" feature of a messaging application. The "message" feature allows the user to write a message, and then send a message to another user. Thus, the whole feature can't be tested with just one unit test, since how individual components interact with each other at an application level cannot be tested.

4. I would use a unit test to test the max message length feature, because this only concerns the writing portion of the messaging feature. So we only need one unit test to check whether or not we can write more than 80 characters.