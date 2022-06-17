Team.destroy_all
Character.destroy_all
Monster.destroy_all


Team.create!(
    team_name: "Hellfire Club",
    player_total: 4)
Team.create!(
    team_name: "Scoops Ahoy",
    player_total: 4
)
Team.create!(
    team_name: "Hawkins High",
    player_total: 4
)
Team.create!(
    team_name: "Starcourt",
    player_total: 4
)
puts "Done seeding teams"

Monster.create!(
    name: "Demobat",
    image: "https://m.media-amazon.com/images/I/61E7dAC0s4L._AC_SX425_.jpg",
    monster_description: "Lives in the Upside Down. Hungry for human flesh. Scary as hell. Unknown if the Mind FLayer controls them, but it's known that Vecna does.",
    monster_strength: 35
)
Monster.create!(
    name: "Demodog",
    image: "https://static.wikia.nocookie.net/strangerthings8338/images/7/7e/Dart-stage_4.png/revision/latest?cb=20171029230310",
    monster_description: "Please do not pet, unless you're ready to be eaten.",
    monster_strength: 40
)
Monster.create!(
    name: "Demogorgon",
    image: "https://imgix.bustle.com/uploads/image/2020/8/3/bd08021f-3b7f-4537-86dd-ee51d7ee5cc0-strangerthingsdemogorgon.jpg?w=710&h=380&fit=max&auto=format%2Ccompress",
    monster_description: "A matured Demodog. Unbeatable. Indestructable. Only weakness - fire 🔥",
    monster_strength: 47
)
Monster.create!(
    name: "Mind Flayer",
    image: "https://assets1.ignimgs.com/2018/10/30/mind-flayer-stranger-things-1540934970102_160w.jpg?width=1280",
    monster_description: "Ominous / unknown entity. If you encounter, RUUUUUUNNNNNNNNNNNN",
    monster_strength: 75
)
Monster.create!(
    name: "Vecna",
    image: "https://www.dexerto.com/wp-content/uploads/2022/05/31/Vecna-Stranger-Things-Season-4.jpg",
    monster_description: "Foot solider of Mind Flayer. Origin unknown 😜",
    monster_strength: 65
)
puts "Done seeding monsters 👾"

Character.create!(
    name: "Max Mayfield", 
    age: 15, 
    strength: 7, 
    intelligence: 8, 
    image: "https://static.wikia.nocookie.net/strangerthings8338/images/0/0b/Max_mayfield_season_2.jpg/revision/latest?cb=20210820101121"
)
Character.create!(
    name: "Will Byers", 
    age: 15, 
    strength: 2, 
    intelligence: 9, 
    image: "https://tvline.com/wp-content/uploads/2022/06/stranger-things-season-4-episode-5-will-in-heartstopper-2.png"
)
Character.create!(
    name: "Mike Wheeler", 
    age: 15, 
    strength: 6, 
    intelligence: 6, 
    image: "https://static.wikia.nocookie.net/strangerthings8338/images/8/83/Mike_Wheeler_-_S4.jpg/revision/latest?cb=20220323164808"
)
Character.create!(
    name: "Lucas Sinclair", 
    age: 15, 
    strength: 6, 
    intelligence: 6, 
    image: "https://globeecho.com/wp-content/uploads/2022/05/StrangerThings_StrangerThings4_1_00_19_18_18.jpg"
)
Character.create!(
    name: "Dustin Henderson", 
    age: 15, 
    strength: 6, 
    intelligence: 10, 
    image: "https://s3.r29static.com/bin/entry/869/x,80/2214004/image.jpg"
)
Character.create!(
    name: "Steve Harrington", 
    age: 19, 
    strength: 9, 
    intelligence: 4, 
    image: "https://www.indiewire.com/wp-content/uploads/2017/10/stranger-things-steve-junkyard.png"
)
Character.create!(
    name: "Robin Buckley", 
    age: 17, 
    strength: 6, 
    intelligence: 9, 
    image: "https://static.wikia.nocookie.net/strangerthings8338/images/f/fc/Robin_S3.png/revision/latest?cb=20190409051202"
)
Character.create!(
    name: "Nancy Wheeler", 
    age: 18, 
    strength: 5, 
    intelligence: 8, 
    image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/05/nancy-wheeler-stranger-things-season-4-1.jpg"
)
Character.create!(
    name: "Jonathan Byers", 
    age: 18, 
    strength: 7, 
    intelligence: 6, 
    image: "https://static.wikia.nocookie.net/strangerthings8338/images/0/0b/Jonathan-Byers-Season-2.png/revision/latest?cb=20180206233841"
)
Character.create!(
    name: "Eddie Munson", 
    age: 19, 
    strength: 8, 
    intelligence: 4, 
    image: "https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg5Nzc5NDIwNzU4NjgxMjc2/joseph-quinn-5-things-know-about-new-stranger-things-actor-005.jpg"
)
Character.create!(
    name: "Erica Sinclair", 
    age: 15, 
    strength: 3, 
    intelligence: 15, 
    image: "https://static.wikia.nocookie.net/strangerthings8338/images/8/8d/Erica_Sinclair_S3.png/revision/latest?cb=20190706021540"
)
Character.create!(
    name: "Argyle", 
    age: 19, 
    strength: 2, 
    intelligence: 5, 
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/strangerthings-strangerthings4-5-00-25-43-10-1654095603.jpg?resize=480:*"
)
Character.create!(
    name: "Joyce Byers", 
    age: 40, 
    strength: 6, 
    intelligence: 8, 
    image: "https://static.wikia.nocookie.net/strangerthings8338/images/d/df/Joyce_%28S3%29.png/revision/latest?cb=20190705190931"
)
Character.create!(
    name: "Jim Hopper", 
    age: 42, 
    strength: 10, 
    intelligence: 8, 
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hopper-stranger-things-3-1562101073.jpg?crop=0.5xw:1xh;center,top&resize=480:*"
)
Character.create!(
    name: "Murry Bauman", 
    age: 45, 
    strength: 9, 
    intelligence: 10, 
    image: "https://static.wikia.nocookie.net/strangerthings8338/images/d/dd/Murray2.jpg/revision/latest?cb=20201103150557"
)
Character.create!(
    name: "Eleven", 
    age: 15, 
    strength: 15, 
    intelligence: 8, 
    image: "https://static.wikia.nocookie.net/strangerthings8338/images/d/dd/Murray2.jpg/revision/latest?cb=20201103150557"
)
Character.create!(
    name: "Suzie Bingham", 
    age: 15, 
    strength: 2, 
    intelligence: 10, 
    image: "https://static.wikia.nocookie.net/strangerthings8338/images/e/e7/Suzie_S3.png/revision/latest?cb=20190705073739"
)
puts "Done seeding characters 🚲"
