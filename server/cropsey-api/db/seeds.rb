# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Initializing app..."

User.destroy_all
NewsPost.destroy_all
TourDate.destroy_all

puts "Creating admin accounts..."


puts "Admin accounts created!"

puts "Generating news posts..."

n1 = NewsPost.create(user_id: admin.id, title: "Test", content: "test")
n2 = NewsPost.create(user_id: admin.id, title: "Test", content: "test")
n3 = NewsPost.create(user_id: admin.id, title: "Test", content: "test")
n4 = NewsPost.create(user_id: admin.id, title: "Test", content: "test")
n5 = NewsPost.create(user_id: admin.id, title: "Test", content: "test")

puts "News posts generated!"

# 10.times do 
#     tourdate = TourDate.create(user_id: admin.id, image: "http://testlink.com", venue: "your mom's house", 
#     city: "your mom's city", state: "you get the idea", time: "10:00", date: "2015-06-04", ticket_link: "http://hey.com",
#     rsvp_link: "here we go.com")
# end

puts "Sorting through albums..."


a1 = MusicPost.create(
    user_id: admin.id, 
    album_cover: "https://f4.bcbits.com/img/a1695831893_16.jpg", 
    title: "The First Rule of Misery", 
    record_label: "Independent",  
    release_date: "August 10, 2020", 
    description: "The first single tracked, mixed and mastered by up and coming New York Hardcore outfit Cropsey.", 
    spotify_link: nil, 
    bandcamp_link: "https://cropseyofficial.bandcamp.com/track/the-first-rule-of-misery" 
)

a2 = MusicPost.create(
    user_id: admin.id, 
    album_cover: "https://f4.bcbits.com/img/a0879462897_16.jpg", 
    title: "1776", 
    record_label: "Independent", 
    release_date: "September 8, 2020", 
    description: "The second album by New York Hardcore outfit Cropsey.", 
    spotify_link: nil, 
    bandcamp_link: "https://cropseyofficial.bandcamp.com/track/1776" 
)

a3 = MusicPost.create(
    user_id: admin.id, 
    album_cover: "https://f4.bcbits.com/img/a3105939528_16.jpg", 
    title: "Cropsey (1054 Redux)", 
    record_label: "1054 Records", 
    release_date: "January 1, 2021 | October 8, 2021", 
    description: "This debut EP was originally released digitally by the band in January 2021 followed by a very limited CD Digipack pressing by German label FWH Records.", 
    spotify_link: "https://open.spotify.com/album/2WW2VgNp5L9iNoP8tjlzQZ?si=zCXt82S7Q-GjvoeJxfxCFg", 
    bandcamp_link: "https://1054records.bandcamp.com/album/cropsey-1054-redux" 
)

a4 = MusicPost.create(
    user_id: admin.id, 
    album_cover: "https://f4.bcbits.com/img/a1875574771_16.jpg", 
    title: "Malfeasance", 
    record_label: "1054 Records", 
    release_date: "April 21, 2023", 
    description: "CROPSEY are one of the new breed taking the NYHC scene by storm!\n
    Through their pure hard work & relentless live shows they are building a serious name for themselves and definitely one to watch.
    Having played alongside heavyweights like Madball, E-Town Concrete, Sworn Enemy, Incendiary, Bury Your Dead & Gridiron in recent times they are building a solid following & set to explode with this new album!\n
    \"Malfeasance\" is the follow up to the very well recieved 2021 debut self titled EP & truly shows their progression musically & as a band in general. Featuring a special (& very rare) guest vocal appearance by Sal Lococo from NYHC royalty Sworn Enemy this album is a must have for all fans of Heavy Hardcore", 
    spotify_link: nil, 
    bandcamp_link: "https://1054records.bandcamp.com/album/malfeasance" 
)


puts "Loading tour dates..."

t1 = TourDate.create(
    user_id: admin.id, 
    venue: "Jimmy's Bar and Grill", 
    city: "Kearny", 
    state: "New Jersey",
    country: "US",
    time: "06:00",
    date: "2023-04-29",
    ticket_link: "https://www.songkick.com/concerts/40853784-cropsey-at-jimmys-bar-and-grill?utm_source=1471&utm_medium=partner"
 )

 t2 = TourDate.create(
    user_id: admin.id, 
    venue: "Mother Pugs Saloon", 
    city: "Staten Island", 
    state: "New York",
    time: "10:00",
    date: "2023-05-06",
    ticket_link: "https://www.songkick.com/concerts/41005144-silence-equals-death-njhc-at-mother-pugs"
 )

 t3 = TourDate.create(
    user_id: admin.id, 
    venue: "Bowery Electric", 
    city: "New York City", 
    state: "New York",
    time: "01:00",
    date: "2023-05-21",
    ticket_link: "https://www.songkick.com/concerts/40925690-reaching-out-at-bowery-electric"
 )


puts "Tour dates loaded!"

puts "App initialized!"
