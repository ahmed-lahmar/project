# warmUp

When using different machine
Always .. don’t forget to erase Git credentials from mac:

1. check for the last name and email by the commands:

git config --global user.name
git config --global user.email

2. delete the last credentials for that username and email by the commands:
   git config --global --unset user.name "the appeared username"
   git config --global --unset user.email "the appeared email"

3. on Mac desktop search for “keychain”, search for any Github account and delete it.

First time work
1.Fork the required warm up repo ( check slack to see link ).

2. From your Terminal, clone the _forked_ repo to your local Desktop, (you can find it in your Github repositories).
   git clone https://github.com/<<UserName>>/<<Repo Name>>
3. From your terminal, Navigate to _the forked repo_.
   cd warmUp
   4.Create a new remote locally by running this command in your terminal:
   git remote add TheRemoteName RepoLinkHere
   example:
   git remote add remote https://github.com/rbk-org/warmUp
4. Read the question, solve it, and save.
5. Use git status to check the changed files.
   git status
6. Stage the changes of the file.
   git add fileName.js
7. Commit your changes
   git commit -m “yourMessage”
8. Push your code to your GitHub account
   git push origin master
   10.share your solution with the administration, from your forked repo in your Github account, select Pull Requests and then click on create a New pull request.
   12.STOP. Before you Click to create a pull request for this comparison you must adjust the target branch (aka base branch) to be your username. Once changed, the pull-request heading should look like this:
   _rbk:username ... username:master_
9. Click Send pull request

Daily work

1. If you are using our mac DELETE the Warmup folder from the Desktop
2. Check the git conf

If you are using a different machine, repeat the steps mentioned above (without forking again ).

2. Get the new daily warm up by pulling it from the remote.
   git pull yourRemoteName master
   Note: if you can’t remember your remote name, use the following command to know
   git remote -v
3. Read the new warm up exercise, solve it, and save.
4. Use git status to check the changed files.
   git status
5. Stage the changes of the file.
   git add fileName.js
6. Commit your changes
   git commit -m “yourMessage”
7. Push your code to your GitHub account
   git push origin master
   7.share your solution with the administration, from your forked repo in your Github account, select Pull Requests and then click on create a New pull request.
   8.STOP. Before you Click to create a pull request for this comparison you must adjust the target branch (aka base branch) to be your username. Once changed, the pull-request heading should look like this:
   _rbk:username ... username:master_
8. Click Send pull request
9. You are all done.
