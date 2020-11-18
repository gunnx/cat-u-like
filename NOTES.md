
Spent around 4-5 hours on this in total. An hour of that was probably just getting things setup and understanding how the API works

Would normally build my own UI but in interests of speed, chose a library to do most the hard work, with regards to responsive grid.

React router is technically overkill for this app but its pretty much what I'd always use.

Wanted to get the vote/favourite data coming back with the images and to do this I've set the API to send `sub_id` which enables this but means when it comes to voting you can only vote once (which makes perfect sense) but means score will be 0/1 only for the given user. 
So I've used Postman to make more votes without sending a `sub_id`

Unable to delete votes, looking at forum this is a known bug 

