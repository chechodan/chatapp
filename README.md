# Chat application

The project consists of a simple chat with [Meteor](https://www.meteor.com/). The mechanics of the architecture of the framework is used to represent the messaging. 

## Requirement

It is necessary to have installed a [Meteor](https://www.meteor.com/) for the application to work.

## Configuration

Users can select different channels to communicate, as well as the username that identifies them. To change the channel or the username just modify and update the configuration. On the messages section, on margin upper right shows the selected username and channel. By default the selected channel is number one and the username is 'unknown'.
Setting is not persistent, so that if you update the page configuration is lost. Anyway, it is not necessary to update the page.

## Collection

It uses a collection called 'messages' to save the messages that users perform. This collection as well as save the message with the date of creation, also associated with the author and the channel. This allows us to filter messages depending on the selected channel.

## Run the server

To run the server, simply write 'meteor' in the command line.