const { getCollection, getMongoCollection, DATABASE_NAME } = require('./backend/db')

async function populateContent() {
    const collection = await getMongoCollection(DATABASE_NAME, "content")
    await collection.insertMany([
        {
            "type": 0,
            "name": "Halo",
            "description": "Depicting an epic 26th-century conflict between humanity and an alien threat known as the Covenant, the series weaves deeply drawn personal stories with action, adventure and a richly imagined vision of the future.",
            "url": [

            ],
            "image": [
                "https://entretenimento.plu7.com/wp-content/uploads/2022/03/Na-serie-de-TV-Halo-a-guerra-nao-e-um.jpg",
                "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.latercera.com%2Fmouse%2Flos-nuevos-posters-de-la-serie-de-halo-muestran-en-detalle-a-sus-personajes%2F&psig=AOvVaw2snVc075DxVZnc4PEMRKCF&ust=1654254306275000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIjLttjPjvgCFQAAAAAdAAAAABAU"
            ],
            "releaseDate": "2022-03-24",
            "category": [

            ],
            "totalEpisodes": 9,
            "seconds": 27420
        },
        {
            "type": 0,
            "name": "Stranger Things",
            "description": "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
            "url": [

            ],
            "image": [
                "https://conteudo.imguol.com.br/c/entretenimento/58/2022/05/12/novo-poster-da-quarta-temporada-de-stranger-things-1652368177430_v2_3x4.jpg",
                "https://cailloupettismoviereviews.com/wp-content/uploads/2022/02/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_-1.jpg"
            ],
            "releaseDate": "2016-07-15",
            "category": [

            ],
            "totalEpisodes": 32,
            "seconds": 111540
        },
        {
            "type": 0,
            "name": "Moon Knight",
            "description": "When Steven Grant, a mild-mannered gift-shop employee, becomes plagued with blackouts and memories of another life, he discovers he has dissociative identity disorder and shares a body with mercenary Marc Spector. As Steven/Marc’s enemies converge upon them, they must navigate their complex identities while thrust into a deadly mystery among the powerful gods of Egypt.",
            "url": [

            ],
            "image": [
                "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6fc8d46a-311d-4d0f-8ca2-6cbdbdae2e8a/df3780y-4b585a39-ce4e-46d8-9b10-93ad163954c3.png/v1/fill/w_800,h_999,q_70,strp/moon_knight_fan_made_poster_by_lochana779_df3780y-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM1MCIsInBhdGgiOiJcL2ZcLzZmYzhkNDZhLTMxMWQtNGQwZi04Y2EyLTZjYmRiZGFlMmU4YVwvZGYzNzgweS00YjU4NWEzOS1jZTRlLTQ2ZDgtOWIxMC05M2FkMTYzOTU0YzMucG5nIiwid2lkdGgiOiI8PTEwODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.tIfPSeGJHh_I4hRpfVdxvi-sobViAvzqQsiwRcYScG8",
                "https://m.media-amazon.com/images/M/MV5BYTc5OWNhYjktMThlOS00ODUxLTgwNDQtZjdjYjkyM2IwZTZlXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_.jpg"
            ],
            "releaseDate": "2022-03-30",
            "category": [

            ],
            "totalEpisodes": 6,
            "seconds": 18120
        },
        {
            "type": 0,
            "name": "SPY x FAMILY",
            "description": "Master spy Twilight is the best at what he does when it comes to going undercover on dangerous missions in the name of a better world. But when he receives the ultimate impossible assignment—get married and have a kid—he may finally be in over his head!\n\nNot one to depend on others, Twilight has his work cut out for him procuring both a wife and a child for his mission to infiltrate an elite private school. What he doesn't know is that the wife he's chosen is an assassin and the child he's adopted is a telepath!",
            "url": [

            ],
            "image": [
                "https://sm.ign.com/ign_br/screenshot/default/spy-x-family_uu9g.jpg",
                "https://img1.ak.crunchyroll.com/i/spire1/7c186f0cbe78d53cc327520b3b390a821649089667_main.jpg"
            ],
            "releaseDate": "2022-04-09",
            "category": [

            ],
            "totalEpisodes": 8,
            "seconds": 11520
        },
        {
            "type": 0,
            "name": "Hidden Passion",
            "description": "The Reyes-Elizondo's idyllic lives are shattered by a murder charge against Eric and León.",
            "url": [

            ],
            "image": [
                "https://www.kenyabuzz.com/lifestyle/wp-content/uploads/2020/10/Hidden-passion.jpg",
                "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tvtime.com%2Fpt_PT%2Fshow%2F169581&psig=AOvVaw062I0Mt91H1m8N92dsXoSW&ust=1654255418654000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPCx7efTjvgCFQAAAAAdAAAAABAD"
            ],
            "releaseDate": "2003-10-21",
            "category": [

            ],
            "totalEpisodes": 259,
            "seconds": 656760
        },
        {
            "type": 0,
            "name": "Welcome to Eden",
            "description": "Are you happy? With this question, Zoa and four other attractive young people, very active on social networks, are invited to the most exclusive party in history on a secret island, organized by the brand of a new drink. What begins as an exciting journey will soon become the journey of a lifetime. But paradise is not really what it seems - Welcome to Eden.",
            "url": [

            ],
            "image": [
                "https://mmc.tirto.id/image/otf/500x0/2022/05/11/welcome-to-eden_ratio-16x9.jpg",
                "https://m.media-amazon.com/images/M/MV5BMTNiZTJlNTUtYTZiOC00MmQ2LTkzYTctMDcwMGJmNGEwYmU2XkEyXkFqcGdeQXVyMTMzODk3NDU0._V1_.jpg"
            ],
            "releaseDate": "2022-05-06",
            "category": [

            ],
            "totalEpisodes": 6,
            "seconds": 19560
        },
        {
            "type": 0,
            "name": "Peaky Blinders",
            "description": "A gangster family epic set in 1919 Birmingham, England and centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby, who means to move up in the world.",
            "url": [

            ],
            "image": [
                "https://observatoriodocinema.uol.com.br/wp-content/uploads/2022/03/peaky-blinders-1.jpg",
                "https://cdn.europosters.eu/image/1300/posters/peaky-blinders-shelby-family-i120181.jpg"
            ],
            "releaseDate": "2013-09-12",
            "category": [

            ],
            "totalEpisodes": 36,
            "seconds": 124980
        },
        {
            "type": 0,
            "name": "Grey's Anatomy",
            "description": "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
            "url": [

            ],
            "image": [
                "https://cdn.britannica.com/82/198682-050-0EB80673/cast-Greys-Anatomy.jpg",
                "https://m.media-amazon.com/images/M/MV5BODA2Mjk0N2MtNGY0Mi00ZWFjLTkxODEtZDFjNDg4ZDliMGVmXkEyXkFqcGdeQXVyMzAzNTY3MDM@._V1_.jpg"

            ],
            "releaseDate": "2005-03-27",
            "category": [

            ],
            "totalEpisodes": 399,
            "seconds": 1029300
        },
        {
            "type": 0,
            "name": "Pantanal",
            "description": "After the mysterious disappearance of his father, Joventino, the cowboy José Leôncio becomes a wealthy farm owner in Pantanal. Over twenty years have passed and, bitter-hearted because of his father vanishing and the escape of his wife to Rio de Janeiro with his baby, José Leôncio has the chance to make amends with the boy, now a young man raised in the big city with very different values and habits than his own.",
            "url": [

            ],
            "image": [
                "https://movimentocountry.ig.com.br/wp-content/uploads/2022/03/pantanal-maior-aposta-globo.jpg",
                "https://m.media-amazon.com/images/M/MV5BMDQzYzc4MGItYmMyZi00OGNkLWI5OWEtNTc3OTQ1MGYyOWVkXkEyXkFqcGdeQXVyNjI0NDkwNjE@._V1_.jpg"
            ],
            "releaseDate": "2022-03-28",
            "category": [

            ],
            "totalEpisodes": 54,
            "seconds": 158880
        },
        {
            "type": 0,
            "name": "Star Trek: Strange New Worlds",
            "description": "Follow Christopher Pike, Spock and Number One in the years before Captain Kirk boarded the U.S.S. Enterprise, as they explore new worlds around the galaxy. This show is a prequel to the original series and Star Trek: Discovery.",
            "url": [

            ],
            "image": [
                "https://img.ibxk.com.br/2021/08/26/26102612091174.jpg",
                "https://m.media-amazon.com/images/M/MV5BYWNlYmZkZjQtNjU5OS00YTNkLWJmOTEtYmZiMmUwZGI3NTM3XkEyXkFqcGdeQXVyMTM2NTIwMDIw._V1_.jpg"
            ],
            "releaseDate": "2022-05-05",
            "category": [

            ],
            "totalEpisodes": 4,
            "seconds": 12840
        },
        {
            "type": 0,
            "name": "Robinson",
            "description": "Expedition Robinson is a Swedish reality television program in which contestants are put into survival situations, and a voting process eliminates one person each episode until a winner is determined. The format was developed in 1994 by Charlie Parsons for a United Kingdom TV production company called Planet 24, but the Swedish debut in 1997 was the first production to actually make it to television.",
            "url": [

            ],
            "image": [
                "http://picl.com.fj/wp-content/uploads/2020/07/robinsonformat.png",
                "https://m.media-amazon.com/images/M/MV5BNjM1MWE3NGUtMmE2Ny00ZDZlLTgxOWEtODFiYzU5YzU2MzcxXkEyXkFqcGdeQXVyMTQzMjU1NjE@._V1_.jpg"
            ],
            "releaseDate": "1997-09-13",
            "category": [

            ],
            "totalEpisodes": 264,
            "seconds": 656220
        },
        {
            "type": 0,
            "name": "Lucifer",
            "description": "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape.",
            "url": [

            ],
            "image": [
                "https://br.web.img3.acsta.net/newsv7/19/09/06/18/15/2133944.jpg",
                "https://i.pinimg.com/736x/07/6e/3c/076e3c582ed5464ffaea6437df6e3572.jpg"
            ],
            "releaseDate": "2016-01-25",
            "category": [

            ],
            "totalEpisodes": 93,
            "seconds": 264000
        },
        {
            "type": 0,
            "name": "All of Us Are Dead",
            "description": "A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out — or turn into one of the rabid infected.",
            "url": [
                "Netflix"
            ],
            "image": [
                "https://www.centralcomics.com/wp-content/uploads/2022/01/Allof-US-Are-Dead.jpg",
                "https://www.themoviedb.org/t/p/w500/pTEFqAjLd5YTsMD6NSUxV6Dq7A6.jpg"
            ],
            "releaseDate": "2022-01-28",
            "category": [

            ],
            "totalEpisodes": 12,
            "seconds": 44100
        },
        {
            "type": 0,
            "name": "The Flash",
            "description": "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.",
            "url": [
                "AppleTV"
            ],
            "image": [
                "https://techdoxx.com/wp-content/uploads/2021/10/the_flash_boots_1634405926609.jpg",
                "https://m.media-amazon.com/images/M/MV5BMDIzNzYwNTctZWY4Mi00YjQ2LWI5YWYtMzdmNDgwMGI4Yzk1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
            ],
            "releaseDate": "2014-10-07",
            "category": [

            ],
            "totalEpisodes": 167,
            "seconds": 439920
        },
        {
            "type": 0,
            "name": "The Quest",
            "description": "A ground-breaking immersive competition series that drops 8 young people into the fantastic, fictional world of Everealm, where they must save a Kingdom by fulfilling an ancient prophecy.",
            "url": [
                "AppleTV",
                "Amazon"
            ],
            "image": [
                "https://mozananews.com/wp-content/uploads/2022/05/The-Quest.jpg",
                "https://br.web.img2.acsta.net/pictures/22/04/26/14/23/2521517.jpg"
            ],
            "releaseDate": "2022-05-11",
            "category": [

            ],
            "totalEpisodes": 10,
            "seconds": 25260
        },
        {
            "type": 0,
            "name": "The Walking Dead",
            "description": "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
            "url": [
                "AMC"
            ],
            "image": [
                "https://static0.srcdn.com/wordpress/wp-content/uploads/2021/04/The-Walking-Dead-Season-11.jpg",
                "https://cdn.europosters.eu/image/750/posters/the-walking-dead-city-i15032.jpg"
            ],
            "releaseDate": "2010-10-31",
            "category": [

            ],
            "totalEpisodes": 169,
            "seconds": 467100
        },
        {
            "type": 0,
            "name": "The Good Doctor",
            "description": "Shaun Murphy, a young surgeon with autism and savant syndrome, relocates from a quiet country life to join a prestigious hospital's surgical unit. Unable to personally connect with those around him, Shaun uses his extraordinary medical gifts to save lives and challenge the skepticism of his colleagues.",
            "url": [
                "ABC",
                "Hulu"
            ],
            "image": [
                "https://static01.nyt.com/images/2017/11/13/arts/13gooddoctor-1/12gooddoctor-1-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
                "https://static.wikia.nocookie.net/the-good-doctor/images/7/7a/3Poster1.png/revision/latest?cb=20190918074659"
            ],
            "releaseDate": "2017-09-25",
            "category": [

            ],
            "totalEpisodes": 94,
            "seconds": 242520
        },
        {
            "type": 0,
            "name": "The D'Amelio Show",
            "description": "From relative obscurity and a seemingly normal life, to overnight success and thrust into the Hollywood limelight overnight, the D’Amelios are faced with new challenges and opportunities they could not have imagined.",
            "url": [
                "Hulu"
            ],
            "image": [
                "https://febreteen.com.br/wp-content/uploads/2021/10/The-DAmelio-Show.jpg",
                "https://br.web.img2.acsta.net/pictures/21/09/14/16/20/0582284.jpg"
            ],
            "releaseDate": "2021-09-03",
            "category": [

            ],
            "totalEpisodes": 8,
            "seconds": 11040
        },
        {
            "type": 0,
            "name": "I Am Not an Animal",
            "description": "I Am Not An Animal is an animated comedy series about the only six talking animals in the world, whose cosseted existence in a vivisection unit is turned upside down when they are liberated by animal rights activists.",
            "url": [
                "AppleTV",
                "Amazon"
            ],
            "image": [
                "https://static.tvtropes.org/pmwiki/pub/images/Iamnotananimal.jpg",
                "https://cdn.animationexplore.com/catimg/472060.jpg"
            ],
            "releaseDate": "2004-05-10",
            "category": [

            ],
            "totalEpisodes": 6,
            "seconds": 10800
        },
        {
            "type": 0,
            "name": "Arcane",
            "description": "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.",
            "url": [
                "Netflix"
            ],
            "image": [
                "https://www.aroged.com/wp-content/uploads/2022/03/Fascinating-cosplay-of-Jinx-from-Arcane-makes-fans-cheer.jpg",
                "https://br.web.img3.acsta.net/pictures/21/11/16/14/35/2231192.jpg"
            ],
            "releaseDate": "2021-11-06",
            "category": [

            ],
            "totalEpisodes": 9,
            "seconds": 22080
        },
        {
            "type": 0,
            "name": "Given",
            "description": "Tightly clutching his Gibson guitar, Mafuyu Satou steps out of his dark apartment to begin another day of his high school life. While taking a nap in a quiet spot on the gymnasium staircase, he has a chance encounter with fellow student Ritsuka Uenoyama, who berates him for letting his guitar's strings rust and break. Noticing Uenoyama's knowledge of the instrument, Satou pleads for him to fix it and to teach him how to play. Uenoyama eventually agrees and invites him to sit in on a jam session with his two band mates: bassist Haruki Nakayama and drummer Akihiko Kaji.",
            "url": [
                "Crunchyroll"
            ],
            "image": [
                "https://images-ext-1.discordapp.net/external/V667ju30tNTP8FCx_FVEy0kysgk4-n0N48muMo9_u0I/https/labdicasjornalismo.com/images/noticias/6752/27032021094638_GIVEN_02_C.png?width=716&height=354",
                "https://img1.ak.crunchyroll.com/i/spire2/b0ccaf974df65b4a74c0b84f3696ecd41562788869_main.jpg"
            ],
            "releaseDate": "2019-07-12",
            "category": [

            ],
            "totalEpisodes": 11,
            "seconds": 15180
        },
        {
            "type": 0,
            "name": "Conan, the Boy in Future",
            "description": "After the great disaster of 2008, A war that destroyed the planet, the world is now largely ocean with the continents having sunk. Conan lives on a remote island with his grandpa and nature, never having seen another human being. But one day a mysterious girl, Lana, washes up on his beach. The two become quick friends, but she’s soon kidnapped and taken to Industria, a technological remainder from the world before. Conan leaves his island in pursuit, braving new lands and many hardships with new friends and enemies just beyond the horizon.",
            "url": [
                "AppleTV",
                "Amazon",
                "Google Play"
            ],
            "image": [
                "https://images-ext-2.discordapp.net/external/W2bjUeSs0hVjweVibb8NTVPNeklfhZH0MaRY9prgazE/https/www.repstatic.it/content/contenthub/img/2021/09/28/221358764-2d339ee2-14b5-4443-bf50-e74c5a5c21a2.jpg?width=716&height=406",
                "https://images-ext-2.discordapp.net/external/4WC68egC0fuhhbv9K7eWihcBXvsQIoUXf3Ua8sTDAJs/%3Fw%3D584/https/universosesquecidos.files.wordpress.com/2017/08/poster2.jpg?width=498&height=702"
            ],
            "releaseDate": "1978-04-04",
            "category": [

            ],
            "totalEpisodes": 50,
            "seconds": 83580
        },
        {
            "type": 0,
            "name": "BTS In the SOOP",
            "description": "'In the SOOP BTS ver.' is a reality show, portraying BTS members' everyday life, relaxation, and everything in between, away from the city life. A time of freedom and healing in a place for BTS, and BTS only.",
            "url": [

            ],
            "image": [
                "https://images-ext-2.discordapp.net/external/aQyWH3F6krg58MEj549MYM68N_lnNwxK_GoEUJu-fgg/https/s2.glbimg.com/GhgplLzbQQC1sTJ-V3sakLrMMEk%3D/620x413/top/e.glbimg.com/og/ed/f/original/2021/09/01/image_dl7MnpV.png",
                "https://images-ext-2.discordapp.net/external/cAlrQX410HYQBP4jSKyVOZpP6bqQw0WySvd-A7LTmOg/https/pictures.betaseries.com/fonds/poster/3916b3f0d626cedc956521337c06879c.jpg?width=477&height=701"
            ],
            "releaseDate": "2020-08-19",
            "category": [

            ],
            "totalEpisodes": 13,
            "seconds": 62400
        },
        {
            "type": 0,
            "name": "The Kardashians",
            "description": "The family you know and love is here with a brand new series, giving an all-access pass into their lives. Kris, Kourtney, Kim, Khloé, Kendall, and Kylie bring the cameras back to reveal the truth behind the headlines. From the intense pressures of running billion-dollar businesses to the hilarious joys of playtime and school drop-offs, this series brings viewers into the fold with a rivetingly honest story of love & life in the spotlight.",
            "url": [
                "Hulu"
            ],
            "image": [
                "https://www.rbsdirect.com.br/imagesrc/35668451.jpg?w=700",
                "https://olhardigital.com.br/wp-content/uploads/2022/04/The-Kardashians_Poster-819x1024.jpg"
            ],
            "releaseDate": "2022-04-14",
            "category": [

            ],
            "totalEpisodes": 7,
            "seconds": 18600
        },
        {
            "type": 0,
            "name": "The Rising of the Shield Hero",
            "description": "Iwatani Naofumi was summoned into a parallel world along with 3 other people to become the world's Heroes. Each of the heroes respectively equipped with their own legendary equipment when summoned, Naofumi received the Legendary Shield as his weapon. Due to Naofumi's lack of charisma and experience he's labeled as the weakest, only to end up betrayed, falsely accused, and robbed by on the third day of adventure. Shunned by everyone from the king to peasants, Naofumi's thoughts were filled with nothing but vengeance and hatred. Thus, his destiny in a parallel World begins...",
            "url": [
                "Hulu",
                "AppleTV",
                "Crunchyroll",
                "Funimation"
            ],
            "image": [
                "https://images-ext-2.discordapp.net/external/srPUpy96yR3rFmIFu7huGE2mD4PRwiiW8M-ByOnIcOs/%3Ffit%3D1597%252C924%26ssl%3D1/https/i0.wp.com/animeeverything.online/wp-content/uploads/2019/07/991043.jpg?width=716&height=414",
                "https://images-ext-2.discordapp.net/external/V8eZDrjJEqwQY2Ns8afiDTK6f88LaIeBcChAeYJRyKo/%3Fcb%3D20210530081017%26path-prefix%3Dpt-br/https/static.wikia.nocookie.net/dublagem/images/4/4b/The_Rising_of_the_Shield_Hero_Capa.jpg/revision/latest?width=502&height=702"
            ],
            "releaseDate": "2019-01-09",
            "category": [

            ],
            "totalEpisodes": 7,
            "seconds": 18600
        },
        {
            "type": 0,
            "name": "Run BTS!",
            "description": "Run BTS! is a South Korean show by the boy band BTS. The show is all about BTS doing activities, challenges and lots more.",
            "url": [

            ],
            "image": [
                "https://images-ext-2.discordapp.net/external/pkuZUZZI8NYDamo84qE2FI87bKiQwJXEFfjV_fSMr0o/https/upload.wikimedia.org/wikipedia/en/f/f2/Run_BTS_title_card_%2528since_April_14%252C_2020%2529.png",
                "https://images-ext-2.discordapp.net/external/xpe_zmLI3VuGIQaApE56fskcrWmGjj5lg3_2cr31KPk/%3Fv%3D1/https/i.mydramalist.com/p3l4r_4c.jpg"
            ],
            "releaseDate": "2015-08-01",
            "category": [

            ],
            "totalEpisodes": 155,
            "seconds": 279000
        },
        {
            "type": 0,
            "name": "Asobi Asobase - workshop of fun -",
            "description": "During recess, Olivia, a foreign transfer student who doesn't know English, plays a game of \"look-the-other-way\" with Hanako Honda, a loud-mouthed airhead. Their rowdy behavior spurs the ire of Kasumi Nomura, a deadpan loner constantly teased by her older sister for her tendency to lose games. Not willing to compete, Kasumi declines Olivia's offer to join the fun, but eventually gets involved anyway and dispenses her own brand of mischief. Soon, a strange friendship blossoms between the peculiar trio, and they decide to form the \"Pastime Club,\" where they are free to resume their daily hijinks.\n\nWhether it be failing to learn English, trying desperately to become popular, or getting caught by teachers at the wrong time, school life will never be boring when these girls are up to their hilarious antics.",
            "url": [
                "Crunchyroll"
            ],
            "image": [
                "https://images-ext-1.discordapp.net/external/E5jjApP2vaOGE6SBnvDoHXQof7di0i7-yRsG6TdUVCI/https/i.ytimg.com/vi/xX6R_TTnPEA/maxresdefault.jpg?width=716&height=403",
                "https://m.media-amazon.com/images/M/MV5BZTBlOTMyNzItNDc1OC00MTg0LThkYmQtOTg5NTI4NjAwNDIxXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg"
            ],
            "releaseDate": "2018-07-08",
            "category": [

            ],
            "totalEpisodes": 12,
            "seconds": 16560
        },
        {
            "type": 0,
            "name": "Metal Family",
            "description": "Metal Family follows the daily lives of Glam and Victoria, two metal fans that fell in love and had two children together, Dee and Heavy.",
            "url": [

            ],
            "image": [
                "https://images-ext-1.discordapp.net/external/w29W26EAu_ZkOtJcEzOZY3WOFP4hMVbHG0Gg6mkSVkc/%3Fcb%3D20210122030253%26path-prefix%3Dpt-br/https/static.wikia.nocookie.net/dublagem/images/c/c7/Metal_family.jpg/revision/latest?width=716&height=403",
                "https://images-ext-1.discordapp.net/external/L3skivctAPA_wUeTaD-she8O58CvLz_RN2tDninVGXA/https/i.pinimg.com/originals/c9/3b/10/c93b10130b0b7b7287d86c18c2d15e07.png?width=397&height=702"
            ],
            "releaseDate": "2018-09-13",
            "category": [

            ],
            "totalEpisodes": 12,
            "seconds": 5280
        },
        {
            "type": 0,
            "name": "The Promised Neverland",
            "description": "Surrounded by a forest and a gated entrance, the Grace Field House is inhabited by orphans happily living together as one big family, looked after by their \"Mama,\" Isabella. Although they are required to take tests daily, the children are free to spend their time as they see fit, usually playing outside, as long as they do not venture too far from the orphanage — a rule they are expected to follow no matter what. However, all good times must come to an end, as every few months, a child is adopted and sent to live with their new family... never to be heard from again.\n\nHowever, the three oldest siblings have their suspicions about what is actually happening at the orphanage, and they are about to discover the cruel fate that awaits the children living at Grace Field, including the twisted nature of their beloved Mama.",
            "url": [
                "Adult Swim",
                "Crunchyroll",
                "Funimation",
                "Netflix",
                "HBOMax",
                "Hulu"
            ],
            "image": [
                "https://images-ext-1.discordapp.net/external/MgVksD_Dx9BbNIGOcRqwVsumT_O_x68yFK5NPrfbSi8/https/www.magazine-hd.com/apps/wp/wp-content/uploads/2019/12/the-promised-neverland1-1.jpg?width=716&height=379",
                "https://images-ext-1.discordapp.net/external/tFaUJHnbaCBAVLYI6CjGNCAzrRc-_DGaGEHy767PoCQ/https/img1.ak.crunchyroll.com/i/spire2/07f56cb3c9220952600b0975a883b0f91546997210_full.jpg?width=468&height=702"
            ],
            "releaseDate": "2019-01-11",
            "category": [

            ],
            "totalEpisodes": 23,
            "seconds": 31740
        },
        {
            "type": 0,
            "name": "Banana Fish",
            "description": "Nature made Ash Lynx beautiful; nurture made him a cold ruthless killer. A runaway brought up as the adopted heir and sex toy of \"Papa\" Dino Golzine, Ash, now at the rebellious age of seventeen, forsakes the kingdom held out by the devil who raised him. But the hideous secret that drove Ash's older brother mad in Vietnam has suddenly fallen into Papa's insatiably ambitious hands—and it's exactly the wrong time for Eiji Okamura, a pure-hearted young photographer from Japan, to make Ash Lynx's acquaintance...",
            "url": [
                "Amazon"
            ],
            "image": [
                "https://images-ext-2.discordapp.net/external/jl7v16YbHpNnvMQf-VYtIilmtA1rSRS0meq3VIBzZMM/https/ptanime.com/wp-content/uploads/2022/05/capabananafish.jpg?width=716&height=537",
                "https://images-ext-1.discordapp.net/external/xiASKNzIZjZe0CmBtV_D8N3kAdIyZ6GBM6Fk6ndCSH4/https/upload.wikimedia.org/wikipedia/pt/d/d7/Banana_Fish_anime_artwork.jpg"
            ],
            "releaseDate": "2018-07-06",
            "category": [

            ],
            "totalEpisodes": 24,
            "seconds": 32280
        },
        {
            "type": 0,
            "name": "Your Lie in April",
            "description": "Kousei Arima was a genius pianist until his mother's sudden death took away his ability to play. Each day was dull for Kousei. But, then he meets a violinist named Kaori Miyazono who has an eccentric playing style. Can the heartfelt sounds of the girl's violin lead the boy to play the piano again?",
            "url": [
                "Crunchyroll",
                "Hulu",
                "Funimation"
            ],
            "image": [
                "https://images-ext-1.discordapp.net/external/eSLE6Bvx5Qo2LUqKz5h6m74nul7wj2CYvp9nWfbd-u4/https/blogbeautifuldreams.files.wordpress.com/2017/10/your-lie-in-april-1.jpg?width=716&height=403",
                "https://images-ext-2.discordapp.net/external/m9qA3pxEw465VpkPeas-_DIpuGh89zKwC1il4NxGnnQ/https/img1.ak.crunchyroll.com/i/spire3/40e6c04e05ce1efb08815b870a6d39331412797514_full.jpg?width=468&height=702"
            ],
            "releaseDate": "2014-10-10",
            "category": [

            ],
            "totalEpisodes": 22,
            "seconds": 30240
        },
        {
            "type": 0,
            "name": "SK8 the Infinity",
            "description": "\"S\" is a dangerous, top secret, no-holds-barred downhill skateboarding race down an abandoned mine. When avid skateboarder Reki takes Langa to the mountain where \"S\" is held, Langa, who's never been on a skateboard in his life, finds himself sucked into the world of \"S\", and…?!",
            "url": [
                "Crunchyroll",
                "Funimation"
            ],
            "image": [
                "https://images-ext-2.discordapp.net/external/gP1eeXegamBS8jkhEY_h8knXMN1afVfOHpLxWWd0PJ4/https/images-na.ssl-images-amazon.com/images/I/814MGL1gcTL._RI_.jpg?width=716&height=537",
                "https://images-ext-2.discordapp.net/external/O64Rel2m9rIrqXBBF6O4DMZCVLJrn-vBJKZiRs9KJiI/https/ptanime.com/wp-content/uploads/2020/09/SK8-the-Infinity-original-anime-BONES-1st-teaser-poster-visual.jpg?width=494&height=701"
            ],
            "releaseDate": "2021-01-10",
            "category": [

            ],
            "totalEpisodes": 12,
            "seconds": 17280
        },
        {
            "type": 0,
            "name": "Scissor Seven",
            "description": "Seeking to recover his memory, a scissor-wielding, hairdressing, bungling quasi-assassin stumbles into a struggle for power among feuding factions.",
            "url": [
                "Netflix"
            ],
            "image": [
                "https://images-ext-2.discordapp.net/external/8IzvBEd82uI5l-Y2WLUAVZrKSYEQvrWXNxn1jX_lXmc/https/serialcookies.com.br/wp-content/uploads/2020/02/sci.jpg?width=716&height=403",
                "https://images-ext-1.discordapp.net/external/hnIVtWTL_b-uTjYDPKaVp1NTz55F13RxyeOlMM0Kl0M/https/pictures.betaseries.com/fonds/poster/a86b7d6044ad1f5b1793732a5decf963.jpg?width=477&height=701"
            ],
            "releaseDate": "2018-04-25",
            "category": [

            ],
            "totalEpisodes": 30,
            "seconds": 27000
        },
        {
            "type": 0,
            "name": "Maid Sama!",
            "description": "Misaki Ayuzawa is the first female student council president at a once all-boys school turned co-ed. She rules the school with strict discipline demeanor. But she has a secret—she works at a maid cafe due to her families circumstances. One day the popular A-student and notorious heart breaker Takumi Usui finds out her secret and makes a deal with her to keep it hush from the school in exchange for spending some time with him.",
            "url": [
                "Hulu"
            ],
            "image": [
                "https://images-ext-1.discordapp.net/external/vOw_OahFTU5B0Lxt1nM6pmf3hq4s4ar3qrFldgNL4s8/https/4.bp.blogspot.com/-sCNNIlr8ayU/WudU8skuXbI/AAAAAAAAU1M/Z6-W_-Nw3HIigwIcB__OAthjxeplhT9bwCLcBGAs/s1600/Maid-sama%252Bcop.jpg?width=716&height=403",
                "https://images-ext-2.discordapp.net/external/er7LBkSZzcMdrLMxZ__azvhocjz7RAzlJG6oqf4NQ2s/https/www.themoviedb.org/t/p/original/igkn0M1bgMeATz59LShvVxZNdVd.jpg?width=468&height=702"
            ],
            "releaseDate": "2010-04-02",
            "category": [

            ],
            "totalEpisodes": 26,
            "seconds": 38940
        },
        {
            "type": 0,
            "name": "Young Royals",
            "description": "Prince Wilhelm adjusts to life at his prestigious new boarding school, Hillerska, but following his heart proves more challenging than anticipated.",
            "url": [
                "Netflix"
            ],
            "image": [
                "https://streamingsbrasil.com/wp-content/uploads/2021/11/Young-Royals-2-Banner-1130x580.jpg",
                "https://images-ext-2.discordapp.net/external/yPJz8UNEK3kampuIzV6yyaGcS0wOPVb6t0Y6eGfDqXI/https/m.media-amazon.com/images/M/MV5BY2ZiMDZhNTUtMWMwNy00ODVmLTliYWItN2U0NDE4OGNmNTgyXkEyXkFqcGdeQXVyNjc3MjQzNTI%40._V1_.jpg?width=477&height=701"
            ],
            "releaseDate": "2021-07-01",
            "category": [

            ],
            "totalEpisodes": 6,
            "seconds": 16200
        },
        {
            "type": 0,
            "name": "My Hero Academia",
            "description": "In a world where eighty percent of the population has some kind of super-powered Quirk, Izuku was unlucky enough to be born completely normal. But that won't stop him from enrolling in a prestigious hero academy. Now, he'll get his first taste of brutal rivalry from other schools as he braves the cutthroat, no-holds-barred provisional license exam.",
            "url": [
                "Crunchyroll",
                "Hulu",
                "Funimation"
            ],
            "image": [
                "https://images-ext-2.discordapp.net/external/GT4-pnswT1A5YPhJkBYTINy9ozV_bWkW2AtNhS8gcQ0/https/cdn.europosters.eu/image/1300/posters/my-hero-academia-line-up-i99111.jpg?width=716&height=478",
                "https://animesbr.biz/wp-content/uploads/2019/07/phuYuzqWW9ru8EA3HVjE9W2Rr3M.jpg"
            ],
            "releaseDate": "2016-04-03",
            "category": [

            ],
            "totalEpisodes": 113,
            "seconds": 160980
        },
        {
            "type": 0,
            "name": "Vincenzo",
            "description": "Vincenzo Cassano is an Italian lawyer and Mafia consigliere who moves back to Korea due to a conflict within his organization. He ends up crossing paths with a sharp-tongued lawyer named Cha-young, and the two join forces in using villainous methods to take down villains who cannot be punished by the law.",
            "url": [
                "Netflix"
            ],
            "image": [
                "https://images-ext-2.discordapp.net/external/ai012Jf5sF2S3V7anpRfFgFZyDQNDxnEHb-KO0S-Ul8/https/m.media-amazon.com/images/M/MV5BNjZlY2MzYzgtODJlOC00YmYwLWE4MjUtODUxMTIyNmIzZmY2XkEyXkFqcGdeQXVyMTE2MDU0NzAw._V1_.jpg?width=716&height=424",
                "https://images-ext-2.discordapp.net/external/vsE0wqcJ_i44APFk5c1Mat7pB3ZdpwXSPtfTMmkRQoM/https/br.web.img3.acsta.net/pictures/21/12/03/15/42/0565547.jpg?width=526&height=701"
            ],
            "releaseDate": "2021-02-20",
            "category": [

            ],
            "totalEpisodes": 20,
            "seconds": 97140
        },
        {
            "type": 0,
            "name": "Breaking Bad",
            "description": "Breaking Bad is an American crime drama television series created and produced by Vince Gilligan. Set and produced in Albuquerque, New Mexico, Breaking Bad is the story of Walter White, a struggling high school chemistry teacher who is diagnosed with inoperable lung cancer at the beginning of the series. He turns to a life of crime, producing and selling methamphetamine, in order to secure his family's financial future before he dies, teaming with his former student, Jesse Pinkman. Heavily serialized, the series is known for positioning its characters in seemingly inextricable corners and has been labeled a contemporary western by its creator.",
            "url": [
                "Netflix"
            ],
            "image": [
                "https://wp-content.bluebus.com.br/wp-content/uploads/2013/09/Breaking-Bad.jpg",
                "https://images-ext-1.discordapp.net/external/jNyfy-bKYOlMvniyr9gTeONasnI7c0_wB8HMAO01IM8/https/m.media-amazon.com/images/M/MV5BODFhZjAwNjEtZDFjNi00ZTEyLThkNzUtMjZmOWM2YjQwODFmXkEyXkFqcGdeQXVyMjQwMDg0Ng%40%40._V1_FMjpg_UX1000_.jpg?width=468&height=702"
            ],
            "releaseDate": "2008-01-19",
            "category": [

            ],
            "totalEpisodes": 62,
            "seconds": 176160
        },
        {
            "type": 1,
            "title": "The Godfather",
            "description": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
            "url": [
                "Paramount+",
                "Amazon",
                "Google Play",
                "AppleTV",
                "Youtube"
            ],
            "image": [
                "https://images.theconversation.com/files/448820/original/file-20220228-20-1xn1tw4.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
                "https://images-ext-1.discordapp.net/external/2oNfGT5azamR-k12T6NEH1AumMbRHsNMH5m2iUdA5Pc/https/c8.alamy.com/comp/CB6D8E/the-godfather-1972-poster-godf-001vs-moviestore-collection-ltd-CB6D8E.jpg?width=371&height=702"
            ],
            "releaseDate": "1972-03-14",
            "category": [

            ],
            "totalEpisodes": 1,
            "seconds": 10500
        },
        {
            "type": 1,
            "title": "Schindler's List",
            "description": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
            "url": [
                "Youtube",
                "Amazon",
                "Google Play",
                "AppleTV"
            ],
            "image": [
                "https://static.timesofisrael.com/www/uploads/2017/07/goth.jpg",
                "https://img.goldposter.com/2015/04/Schindlers-List_poster_goldposter_com_33.jpg"
            ],
            "releaseDate": "1993-11-30",
            "category": [

            ],
            "totalEpisodes": 1,
            "seconds": 11700

        },
        {
            "type": 1,
            "title": "The Godfather: Part II",
            "description": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
            "url": [
                "Youtube",
                "Amazon",
                "Google Play",
                "AppleTV"
            ],
            "image": [
                "https://images-ext-1.discordapp.net/external/a5zXwDrZW8Bbb4Obf1ysxVZOPzfFFHUMFop-RJkyHFo/https/www.ourgoldenage.com.au/film/the-godfather-part-ii/GAC_The%2520Godfather%2520Part%2520II.jpg?width=716&height=477",
                "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
            ],
            "releaseDate": "1974-12-20",
            "category": [

            ],
            "totalEpisodes": 1,
            "seconds": 12120
        },
        {
            "type": 1,
            "title": "Spirited Away",
            "description": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
            "url": [
                "HBOMax",
                "Amazon",
                "Google Play",
                "AppleTV",
                "Youtube"
            ],
            "image": [
                "https://images-ext-2.discordapp.net/external/z--6itgpmAtjIijTY8vBK3kTQbURASlSkDAGG9gNmwE/https/img1.ak.crunchyroll.com/i/spire4/a31e8373dd6ce2cefd1007f8f96312eb1632160178_main.jpg?width=716&height=403",
                "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
            ],
            "releaseDate": "2001-07-20",
            "category": [

            ],
            "totalEpisodes": 1,
            "seconds": 7500

        },
        {
            "type": 1,
            "title": "Parasite",
            "description": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
            "url": [
                "Hulu",
                "Google Play",
                "AppleTV",
                "Youtube"
            ],
            "image": [
                "https://images-ext-2.discordapp.net/external/J2dv0Vg1BNF7CG852rBu7wGeVAZWEd976pV4e9zsdsE/https/cinemaplanet.pt/wp-content/uploads/2020/01/parasite..jpg?width=716&height=358",
                "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"
            ],
            "releaseDate": "2019-05-30",
            "category": [

            ],
            "totalEpisodes": 1,
            "seconds": 7980

        },
        {
            "type": 1,
            "title": "The Dark Knight",
            "description": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
            "url": [
                "HBOMax",
                "Google Play",
                "AppleTV",
                "Youtube"
            ],
            "image": [
                "https://media.gq.com/photos/5b4dfa2c9eea1c27bfdb9e9b/16:9/w_1942,h_1092,c_limit/10-year-anniversary-the-dark-knight-gq.jpg",
                "https://upload.wikimedia.org/wikipedia/pt/thumb/b/b7/TheDarkKnightRises.jpg/225px-TheDarkKnightRises.jpg"
            ],
            "releaseDate": "2008-07-14",
            "category": [

            ],
            "totalEpisodes": 1,
            "seconds": 9120
        },
        {
            "type": 1,
            "title": "The Lord of the Rings: The Return of the King",
            "description": "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
            "url": [
                "HBOMax",
                "Google Play",
                "AppleTV",
                "Youtube"
            ],
            "image": [
                "https://images-ext-1.discordapp.net/external/33dpakrXvpPD2sEGIWPsjkaaa-Je-bm0-7grXgG5Hm0/https/images.immediate.co.uk/remote/images.atlas.metabroadcast.com/api.pressassociation.com/content/07d1daf4-f2c2-5164-8128-741807118d36.jpg?width=716&height=403",
                "https://images-ext-2.discordapp.net/external/cu4JSiXxtLE5lkKzW9rt7DvnIPNe3RCSUfueX8dzV4A/https/images.saymedia-content.com/.image/t_share/MTc0MzkwMjYyMjIxNTE0Mzc0/should-i-watch-the-lord-of-the-rings-the-return-of-the-king.jpg?width=474&height=702"
            ],
            "releaseDate": "2003-12-01",
            "category": [

            ],
            "totalEpisodes": 1,
            "seconds": 12060
        },
        {
            "type": 1,
            "title": "Gabriel's Inferno",
            "description": "An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel's Inferno is a captivating and wildly passionate tale of one man's escape from his own personal hell as he tries to earn the impossible--forgiveness and love.",
            "url": [
                "Amazon"
            ],
            "image": [
                "https://m.media-amazon.com/images/M/MV5BZTEwZDYwZDgtOWFiNi00YThhLTk4MjMtNDg4ZmJjYTU0M2RiXkEyXkFqcGdeQXVyMTA4ODQyNDYx._V1_.jpg",
                "https://images-ext-1.discordapp.net/external/uizqtlDryzvjezHe13Y76vQRpY8tT32TS9O_z6s93NE/https/m.media-amazon.com/images/M/MV5BZTEwZDYwZDgtOWFiNi00YThhLTk4MjMtNDg4ZmJjYTU0M2RiXkEyXkFqcGdeQXVyMTA4ODQyNDYx._V1_FMjpg_UX1000_.jpg?width=468&height=702"
            ],
            "releaseDate": "2020-05-29",
            "category": [

            ],
            "totalEpisodes": 1,
            "seconds": 7320
        },
        {
            "type": 1,
            "title": "Gabriel's Inferno: Part II",
            "description": "Professor Gabriel Emerson finally learns the truth about Julia Mitchell's identity, but his realization comes a moment too late. Julia is done waiting for the well-respected Dante specialist to remember her and wants nothing more to do with him. Can Gabriel win back her heart before she finds love in another's arms?",
            "url": [
                "Amazon"
            ],
            "image": [
                "https://images-ext-1.discordapp.net/external/tdEW_wTtfxDi8AsMt22E5MefHvg5xfZvNicyAQUllYE/https/fangirlish.com/wp-content/uploads/2021/11/Gabriels-Rapture-kiss.jpg?width=716&height=403",
                "https://m.media-amazon.com/images/M/MV5BMzk3NzEwMWItYmVhMS00ODRiLWEyNDUtOTNmZTBhMDNjMjFmXkEyXkFqcGdeQXVyMTY1NjM1Nzc@._V1_.jpg"
            ],
            "releaseDate": "2020-07-31",
            "category": [

            ],
            "totalEpisodes": 1,
            "seconds": 6300
        },
        {
            "type": 1,
            "title": "Gabriel's Inferno: Part III",
            "description": "The final part of the film adaption of the erotic romance novel Gabriel's Inferno written by an anonymous Canadian author under the pen name Sylvain Reynard.",
            "url": [
                "Amazon"
            ],
            "image": [
                "https://m.media-amazon.com/images/M/MV5BNjJmNTZjZTUtYzllMS00NzBhLTlhMjgtNTkxNGQ4ZjI0YzI4XkEyXkFqcGdeQXVyMTY1NjM1Nzc@._V1_.jpg",
                "https://images-ext-1.discordapp.net/external/g2Weuzyg8P1RDx2wK2tLgWCAXLRXxhlAzavBDUw22PU/https/ifthereviewsfit.files.wordpress.com/2020/12/72ebf-0ktaecbowvkacmszo.jpg?width=468&height=702"
            ],
            "releaseDate": "2020-11-19",
            "category": [

            ],
            "totalEpisodes": 1,
            "seconds": 6300
        },
        {
            "type": 1,
            "title": "Pulp Fiction",
            "description": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
            "url": [
                "Paramount+",
                "Showtime",
                "Google Play",
                "Youtube",
                "Amazon",
                "AppleTV"
            ],
            "image": [
                "https://quecurso.com.br/blog/wp-content/uploads/2018/02/curso-de-danca-pulp-fiction-capa.jpg",
                "https://images-ext-2.discordapp.net/external/11-1rbQ2ZTysYD5YxmfUzYFtevNCPja614VdvXgE5hg/https/i.pinimg.com/736x/33/11/84/331184826a94935bdf4af78a92be86c0--john-travolta-movieposter.jpg"
            ],
            "releaseDate": "1994-09-10",
            "category": [

            ],
            "totalEpisodes": 1,
            "seconds": 9240
        },
        {
            "type": 1,
            "title": "The Green Mile",
            "description": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
            "url": [
                "HBOMax",
                "Google Play",
                "Youtube",
                "Amazon",
                "AppleTV"
            ],
            "image": [
                "https://images-ext-2.discordapp.net/external/bwWiPNFXccHLHm9PPLPhKOH-DCSx01CJeCavOT9POB0/%3Ffit%3D1600%252C1000/https/www.denofgeek.com/wp-content/uploads/2022/02/The-Green-Mile-Hanks-Duncan.jpg?width=716&height=448",
                "https://images-ext-1.discordapp.net/external/KmPTGLnwr0S-Z7fqP9dAcwjxfz4W6LEpFsu7qN0S4Aw/https/nathanburgessinsights.files.wordpress.com/2018/10/img_1794.jpg"
            ],
            "releaseDate": "1999-12-10",
            "category": [

            ],
            "totalEpisodes": 1,
            "seconds": 11040
        }
    ])
}

async function populateSeasons() {
    const collection = await getCollection("season")
    await collection.insertMany([
        {
            "number": 1,
            "description": "Depicting an epic 26th-century conflict between humanity and an alien threat known as the Covenant, the series weaves deeply drawn personal stories with action, adventure and a richly imagined vision of the future.",
            "releaseDate": "March 24, 2022",
            "totalEpisodes": 9,
            "seconds": 27420,
            "contentId": "HaloID"
        },
        {
            "number": 1,
            "description": "When Steven Grant, a mild-mannered gift-shop employee, becomes plagued with blackouts and memories of another life, he discovers he has dissociative identity disorder and shares a body with mercenary Marc Spector. As Steven/Marc’s enemies converge upon them, they must navigate their complex identities while thrust into a deadly mystery among the powerful gods of Egypt.",
            "releaseDate": "March 30, 2022",
            "totalEpisodes": 6,
            "seconds": 18120,
            "contentId": "MoonKnightID"
        }
    ])
}

async function populateEpisodes() {
    const collection = await getCollection("episode")
    await collection.insertMany([
        {
            "number": 1,
            "name": "Contact",
            "description": "In the year 2552, humans on the planet Madrigal have been fighting for independence from Earth, but a fatal encounter with the Alien Covenant complicates things. Master Chief John 117 and his super-soldier “Spartans” join the fight. After the battle, Master Chief heads to his home planet of Reach with a Madrigal survivor and a mysterious object he discovered on the planet. But a controversial order has John questioning his mission, and himself.",
            "releaseDate": "March 24, 2022 7:00 AM",
            "seconds": 3540,
            "seasonId": "HaloSeason1ID"
        },
        {
            "number": 2,
            "name": "Unbound",
            "description": "John takes Kwan to an old friend and learns more about the mystery object, which the Covenant and Makee are determined to steal. With the alien threat growing, Dr. Halsey has a plan to deal with John’s unpredictable behavior.",
            "releaseDate": "March 31, 2022 8:00 AM",
            "seconds": 3240,
            "seasonId": "HaloSeason1ID"
        },
        {
            "number": 3,
            "name": "Emergence",
            "description": "John meets his new partner, and he discovers secrets inside his own memory. Kwan wants to return to Madrigal to continue her people’s fight for independence, but Soren has other plans for her. Makee initiates her plan to retrieve the Madrigal object, with deadly consequences.",
            "releaseDate": "April 7, 2022 8:00 AM",
            "seconds": 3240,
            "seasonId": "HaloSeason1ID"
        },
        {
            "number": 4,
            "name": "Homecoming",
            "description": "Guided by his visions, John takes Halsey and Cortana back to where it all began, looking for answers from his past. With Soren along for protection, Kwan goes in search of an army. Meanwhile John’s behavior inspires another Spartan to begin a journey of self-discovery. And Miranda discovers a possible link between the artifact and something much larger.",
            "releaseDate": "April 14, 2022 8:00 AM",
            "seconds": 3300,
            "seasonId": "HaloSeason1ID"
        },
        {
            "number": 5,
            "name": "Reckoning",
            "description": "On the run and out of options, Kwan and Soren have a difference of opinion. With the possibility of finding the mysterious Halo on everyone’s minds, John makes a horrible discovery. And the war rears its ugly head.",
            "releaseDate": "April 21, 2022 8:00 AM",
            "seconds": 2400,
            "seasonId": "HaloSeason1ID"
        },
        {
            "number": 6,
            "name": "Solace",
            "description": "Survivors from battle return to Reach. John confronts Dr. Halsey, and the lies of his past. The new prisoner seems to know John better than he knows himself. Determined to understand more, John turns back to the mystery artifact, which shows him something truly startling.",
            "releaseDate": "April 28, 2022 8:00 AM",
            "seconds": 2880,
            "seasonId": "HaloSeason1ID"
        },
        {
            "number": 7,
            "name": "Inheritance",
            "description": "Kwan’s journey to uncover her family’s “true purpose” takes her deep into the deserts of Madrigal. Soren obsesses over unfinished business.",
            "releaseDate": "May 5, 2022 8:00 AM",
            "seconds": 3060,
            "seasonId": "HaloSeason1ID"
        },
        {
            "number": 8,
            "name": "Allegiance",
            "description": "John and Makee come to terms with their shared vision. Halsey has one last chance to save her mission, and herself. As things come to a head, everyone must choose a side.",
            "releaseDate": "May 12, 2022 8:00 AM",
            "seconds": 2880,
            "seasonId": "HaloSeason1ID"
        },
        {
            "number": 9,
            "name": "Transcendence",
            "description": "Beaten, battered, and betrayed, John 117 leads the Spartans on a suicide mission to find the Halo and save humanity. But at what price?",
            "releaseDate": "May 19, 2022 8:00 AM",
            "seconds": 2880,
            "seasonId": "HaloSeason1ID"
        },
        {
            "number": 1,
            "name": "The Goldfish Problem",
            "description": "Steven Grant, a mild-mannered man who works a mundane job, begins to suspect that his life may not be his own when an alter living inside him begins to emerge.",
            "releaseDate": "March 30, 2022 8:00 AM",
            "seconds": 2880,
            "seasonId": "MoonKnightSeason1ID"
        },
        {
            "number": 2,
            "name": "Summon the Suit",
            "description": "As Steven reels from the fact that his life may not be his own, a mysterious partner emerges from the past as a war of the gods looms on the horizon.",
            "releaseDate": "April 6, 2022 8:00 AM",
            "seconds": 3180,
            "seasonId": "MoonKnightSeason1ID"
        },
        {
            "number": 3,
            "name": "The Friendly Type",
            "description": "With Marc in the forefront and Harrow near Ammit’s tomb, Marc needs to navigate Cairo while putting his differences aside with Layla and Steven without jeopardizing their mission.",
            "releaseDate": "April 13, 2022 8:00 AM",
            "seconds": 3180,
            "seasonId": "MoonKnightSeason1ID"
        },
        {
            "number": 4,
            "name": "The Tomb",
            "description": "Marc & Steven trek the Siwa Desert with Layla to find Ammit’s tomb, but the threats ahead look to protect the goddess’ resting place.",
            "releaseDate": "April 20, 2022 8:00 AM",
            "seconds": 3240,
            "seasonId": "MoonKnightSeason1ID"
        },
        {
            "number": 5,
            "name": "Asylum",
            "description": "Marc & Steven search through their memories to find their truth or become left behind.",
            "releaseDate": "April 27, 2022 8:00 AM",
            "seconds": 3000,
            "seasonId": "MoonKnightSeason1ID"
        },
        {
            "number": 6,
            "name": "Gods and Monsters",
            "description": "With Layla tracking down Harrow, Marc, Steven, and Khonshu must return to Cairo to stop Ammit as she looks to threaten humanity once more.",
            "releaseDate": "May 4, 2022 8:00 AM",
            "seconds": 2640,
            "seasonId": "MoonKnightSeason1ID"
        }
    ])
}

populateContent()
    .then(() => console.log("Content has been populated"))
    .catch((err) => console.log(err))

// populateSeasons()
//     .then(() => console.log("Season has been populated"))
//     .catch((err) => console.log(err))

// populateEpisodes()
//     .then(() => console.log("Episode has been populated"))
//     .catch((err) => console.log(err))