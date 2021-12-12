# Install_Redis_on_Mac
The detailed installation guide to install Redis on Mac

Hello Everyone,

I recently stumbled upon a YT video on Redis Crash Course by "BRAD" in Traversy Media Channel(https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA). Below are the following that I got stuck while Installing Redis.

1. I was unable to download redis through cli i.e. wget https://download.redis.io/releases/redis-6.2.6.tar.gz and note, I used curl as wget was not functional.
2. I was unable to start the Redis-Cli and it tortured me with an Error: Could not connect to Redis at 127.0.0.1:6379:connection refused not connected>
3. The node-fetch dependency was not detecting and it throwed an error that the node-fetch is not supported.
4. I faced problem with the redis version 4.0  that the return Promise.reject(new errors_1.ClientClosedError()); ClientClosedError: The client is closed {This error was so persistent and struggled with it a lot}.

Below are the steps that I followed to install and run successfully.

[Solution]Problem Statement 1:

Instead of downloading through cli, I tried downloading the "tar.gz" file directly. Downloaded the stable version 6.2.6 and then followed the below cli commands.

$ tar xzf redis-6.2.6.tar.gz
$ cd redis-6.2.6
$ make

This made the job easy to make a binary. Post which, I followed the Redis documentation to run the redis-server. And, it worked fine.

[Solution]Problem Statement 2:

As I said, I was unable to run the redis-cli eventhough, I was able to successfully run the redis-server. I tried several website and stackoverflow to understand the concept behind the error. That's when, I realised the redis-server and redis-client are two separate executable files/process so to make the redis-client working, you should keep in mind that the redis-server should run.

Note, if you're executing the redis-server in the same terminal, then make sure to run the server in the background using the below command.

redis-server --daemonize yes

This should solve the problem, now try using the redis-cli. It will work perfectly.

Now, you can see the port 6379 with the localhost IP, make a test PING and confirm it is connected.

[Solution]Problem Statement 3:

I tried several dependencies and change to make it work but unfortunately, it was not working. Finally, I referred a StackOverflow post where they specified instead of node-fetch, we can use cross-fetch for commonJS scripts that worked like a piece if cake so I updated it to const fetch = require('cross-fetch).

[Solution]Problem Statement 4:

Same goes for this problem statement as well but this took a toll on my understanding. But, finally I was able to locate the problem with the redis version, so instead of 4.0, I downgraded to redis 3.1.2. 

Note: This was concluded by researching over several StackOverflow posts. And, the below post led to the conclusion. "https://stackoverflow.com/questions/70145795/node-redis-does-not-work-on-my-windows-computer-even-though-the-server-is-up-and"






