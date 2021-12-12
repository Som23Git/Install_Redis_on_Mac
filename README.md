# Install_Redis_on_Mac
The detailed installation guide to install Redis on Mac

Hello Everyone,

I recently stumbled upon a YT video on Redis Crash Course by "BRAD" in Traversy Media Channel(https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA). Below are the following that I got stuck while Installing Redis.

1. I was unable to download redis through cli i.e. wget https://download.redis.io/releases/redis-6.2.6.tar.gz and note, I used curl as wget was not functional.
2. I was unable to start the Redis-Cli and it tortured me with an Error: Could not connect to Redis at 127.0.0.1:6379:connection refused not connected>

Below are the steps that I followed to install and run successfully.

Problem statement 1:

Instead of downloading through cli, I tried downloading the "tar.gz" file directly. Downloaded the stable version 6.2.6 and then followed the below cli commands.

$ tar xzf redis-6.2.6.tar.gz
$ cd redis-6.2.6
$ make

This made the job easy to make a binary. Post which, I followed the Redis documentation to run the redis-server. And, it worked fine.

Problem statement 2:

As I said, I was unable to run the redis-cli eventhough, I was able to successfully run the redis-server. I tried several website and stackoverflow to understand the concept behind the error. That's when, I realised the redis-server and redis-client are two separate executable files/process so to make the redis-client working, you should keep in mind that the redis-server should run.

Note, if you're executing the redis-server in the same terminal, then make sure to run the server in the background using the below command.

redis-server --daemonize yes

This should solve the problem, now try using the redis-cli. It will work perfectly.

Now, you can see the port 6379 with the localhost IP, make a test PING and confirm it is connected.

