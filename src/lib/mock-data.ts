
import type { Movie, MovieDetails } from '@/types';

export const genres = [
    { id: 28, name: 'Ação' },
    { id: 12, name: 'Aventura' },
    { id: 16, name: 'Animação' },
    { id: 35, name: 'Comédia' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentário' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Família' },
    { id: 14, name: 'Fantasia' },
    { id: 36, name: 'História' },
    { id: 27, name: 'Terror' },
    { id: 10402, name: 'Música' },
    { id: 9648, name: 'Mistério' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Ficção científica' },
    { id: 10770, name: 'Cinema TV' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'Guerra' },
    { id: 37, name: 'Faroeste' },
];

export const mockMovies: MovieDetails[] = [
  {
    "id": 1,
    "title": "2046",
    "poster_path": "https://theposterdb.com/api/assets/140244/view",
    "backdrop_path": "https://theposterdb.com/api/assets/140244/view",
    "overview": "He was a writer. He thought he wrote about the future, but it was really the past. In his novel, a mysterious train left for 2046 every once in a while. Everyone who went there had the same intention... to recapture their lost memories.",
    "release_date": "2004-05-20",
    "vote_average": 7.4,
    "runtime": 129,
    "genre_ids": [
      18,
      14,
      878
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 14,
        "name": "Fantasia"
      },
      {
        "id": 878,
        "name": "Ficção científica"
      }
    ],
    "tagline": "Feel the heat, keep the feeling burning.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 2,
    "title": "#Manhole",
    "poster_path": "https://theposterdb.com/api/assets/580655/view",
    "backdrop_path": "https://theposterdb.com/api/assets/580655/view",
    "overview": "The day before his wedding, a successful real estate developer falls into a manhole and has to find a way to escape before it's too late.",
    "release_date": "2023-02-10",
    "vote_average": 6.5,
    "runtime": 99,
    "genre_ids": [
      53,
      27
    ],
    "genres": [
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 27,
        "name": "Terror"
      }
    ],
    "tagline": "What lies at the bottom is your new reality.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 3,
    "title": "12.12: The Day",
    "poster_path": "https://theposterdb.com/api/assets/465951/view",
    "backdrop_path": "https://theposterdb.com/api/assets/465951/view",
    "overview": "A historical drama about the 9-hour military coup of December 12, 1979 in South Korea that tore the country apart.",
    "release_date": "2023-11-22",
    "vote_average": 8.1,
    "runtime": 141,
    "genre_ids": [
      18,
      36
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 36,
        "name": "História"
      }
    ],
    "tagline": "The longest day in Korean history.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 4,
    "title": "2 or 3 Things I Know About Her",
    "poster_path": "https://theposterdb.com/api/assets/67452/view",
    "backdrop_path": "https://theposterdb.com/api/assets/67452/view",
    "overview": "A day in the life of Juliette Janson, a housewife from the Parisian suburbs, who prostitutes herself for extra money.",
    "release_date": "1967-03-17",
    "vote_average": 7.1,
    "runtime": 87,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "Godard's vision of modern alienation.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 5,
    "title": "2/Duo",
    "poster_path": "https://placehold.co/600x900?text=2/Duo",
    "backdrop_path": "https://placehold.co/1280x720?text=2/Duo",
    "overview": "The relationship between an actor and his girlfriend is strained when he begins an affair with another woman.",
    "release_date": "1997-08-02",
    "vote_average": 6.8,
    "runtime": 98,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 6,
    "title": "20 Days in Mariupol",
    "poster_path": "https://theposterdb.com/api/assets/437574/view",
    "backdrop_path": "https://theposterdb.com/api/assets/437574/view",
    "overview": "A team of Ukrainian journalists are trapped in the besieged city of Mariupol and struggle to continue their work documenting the atrocities of the Russian invasion.",
    "release_date": "2023-01-20",
    "vote_average": 8.3,
    "runtime": 95,
    "genre_ids": [
      99
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      }
    ],
    "tagline": "The world needs to see this.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 7,
    "title": "200 Motels",
    "poster_path": "https://theposterdb.com/api/assets/200204/view",
    "backdrop_path": "https://theposterdb.com/api/assets/200204/view",
    "overview": "A surrealist musical film by Frank Zappa, portraying the absurd life of a rock band on the road.",
    "release_date": "1971-11-10",
    "vote_average": 6.4,
    "runtime": 98,
    "genre_ids": [
      35,
      10402
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 10402,
        "name": "Música"
      }
    ],
    "tagline": "It's not a movie, it's a Zappa thing.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 8,
    "title": "28 Years Later",
    "poster_path": "https://theposterdb.com/api/assets/629680/view",
    "backdrop_path": "https://theposterdb.com/api/assets/629680/view",
    "overview": "A sequel to 28 Weeks Later, continuing the story of the rage virus outbreak.",
    "release_date": "2025-06-20",
    "vote_average": 0,
    "runtime": 120,
    "genre_ids": [
      27,
      878,
      53
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 878,
        "name": "Ficção científica"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "The rage is not over.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 9,
    "title": "4:44 Last Day on Earth",
    "poster_path": "https://theposterdb.com/api/assets/185127/view",
    "backdrop_path": "https://theposterdb.com/api/assets/185127/view",
    "overview": "A couple in New York City spend their last hours together before the world ends.",
    "release_date": "2011-09-07",
    "vote_average": 5.2,
    "runtime": 85,
    "genre_ids": [
      18,
      878
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 878,
        "name": "Ficção científica"
      }
    ],
    "tagline": "The end is here.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 10,
    "title": "47 Ronin",
    "poster_path": "https://theposterdb.com/api/assets/70651/view",
    "backdrop_path": "https://theposterdb.com/api/assets/70651/view",
    "overview": "A classic telling of the story of 47 leaderless samurai who avenge their master's death.",
    "release_date": "1962-11-03",
    "vote_average": 7.6,
    "runtime": 207,
    "genre_ids": [
      18,
      36,
      28
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 36,
        "name": "História"
      },
      {
        "id": 28,
        "name": "Ação"
      }
    ],
    "tagline": "The loyal retainers.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 11,
    "title": "8½",
    "poster_path": "https://theposterdb.com/api/assets/91697/view",
    "backdrop_path": "https://theposterdb.com/api/assets/91697/view",
    "overview": "A harried movie director retreats into his memories and fantasies.",
    "release_date": "1963-02-14",
    "vote_average": 8.2,
    "runtime": 138,
    "genre_ids": [
      18,
      14
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 14,
        "name": "Fantasia"
      }
    ],
    "tagline": "A film that is as confusing as it is brilliant.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 12,
    "title": "9 Lives of a Wet Pussycat",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Toni_Wille_at_Niedersachsen_Oldies_at_Emslandhallen2013.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Toni_Wille_at_Niedersachsen_Oldies_at_Emslandhallen2013.jpg",
    "overview": "A softcore erotic film from the 70s.",
    "release_date": "1976-01-01",
    "vote_average": 4.5,
    "runtime": 90,
    "genre_ids": [
      10749
    ],
    "genres": [
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 13,
    "title": "A Beautiful Imperfection",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/9/9/7/4/8/9/997489-a-beautiful-imperfection-0-230-0-345-crop.jpg?v=be54b779f2",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/9/9/7/4/8/9/997489-a-beautiful-imperfection-0-230-0-345-crop.jpg?v=be54b779f2",
    "overview": "A young woman finds love in the most unexpected of places.",
    "release_date": "2024-01-18",
    "vote_average": 7.2,
    "runtime": 92,
    "genre_ids": [
      18,
      10749
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "Love is not perfect.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 14,
    "title": "A Better Tomorrow",
    "poster_path": "https://theposterdb.com/api/assets/263820/view",
    "backdrop_path": "https://theposterdb.com/api/assets/263820/view",
    "overview": "A reformed gangster tries to reconcile with his estranged policeman brother, but he is pulled back into the criminal underworld.",
    "release_date": "1986-08-02",
    "vote_average": 7.7,
    "runtime": 95,
    "genre_ids": [
      28,
      80,
      53
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "The action classic that defined a generation.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 15,
    "title": "A Better Tomorrow II",
    "poster_path": "https://theposterdb.com/api/assets/263820/view",
    "backdrop_path": "https://theposterdb.com/api/assets/263820/view",
    "overview": "The sequel to the action classic, with more heroic bloodshed.",
    "release_date": "1987-12-10",
    "vote_average": 7.1,
    "runtime": 104,
    "genre_ids": [
      28,
      80,
      53
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 16,
    "title": "A Bittersweet Life",
    "poster_path": "https://theposterdb.com/api/assets/27006/view",
    "backdrop_path": "https://theposterdb.com/api/assets/27006/view",
    "overview": "A mob enforcer is ordered to kill his boss's mistress but finds himself unable to do it.",
    "release_date": "2005-04-01",
    "vote_average": 7.5,
    "runtime": 120,
    "genre_ids": [
      28,
      80,
      18
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "He had it all, and in a moment, he lost it all.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 17,
    "title": "A Brighter Summer Day",
    "poster_path": "https://theposterdb.com/api/assets/27006/view",
    "backdrop_path": "https://theposterdb.com/api/assets/27006/view",
    "overview": "A sprawling masterpiece of Taiwanese cinema, detailing a young boy's coming-of-age in 1960s Taipei.",
    "release_date": "1991-07-27",
    "vote_average": 8.3,
    "runtime": 237,
    "genre_ids": [
      18,
      80
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "tagline": "A landmark of Taiwanese cinema.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 18,
    "title": "A Charlie Brown Christmas",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/8m/9u/1w/k3/charlie-brown-christmas-1200-1200-675-675-crop-000000.jpg?v=26f2dbe1ef",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/8m/9u/1w/k3/charlie-brown-christmas-1200-1200-675-675-crop-000000.jpg?v=26f2dbe1ef",
    "overview": "Feeling down about the commercialism of Christmas, Charlie Brown tries to find the true meaning of the holiday.",
    "release_date": "1965-12-09",
    "vote_average": 7.5,
    "runtime": 25,
    "genre_ids": [
      16,
      10751,
      35
    ],
    "genres": [
      {
        "id": 16,
        "name": "Animação"
      },
      {
        "id": 10751,
        "name": "Família"
      },
      {
        "id": 35,
        "name": "Comédia"
      }
    ],
    "tagline": "What is Christmas all about?",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 19,
    "title": "A City of Sadness",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/q6/nf/yz/uu/crucified-1200-1200-675-675-crop-000000.jpg?v=24e8f99043",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/q6/nf/yz/uu/crucified-1200-1200-675-675-crop-000000.jpg?v=24e8f99043",
    "overview": "A historical drama about a family caught up in the \"228 Incident\" in Taiwan.",
    "release_date": "1989-10-21",
    "vote_average": 7.8,
    "runtime": 157,
    "genre_ids": [
      18,
      36
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 36,
        "name": "História"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 20,
    "title": "A Colt Is My Passport",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/uw/i2/yo/nb/a-colt-is-my-passport-1200-1200-675-675-crop-000000.jpg?v=181eb1dd51",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/uw/i2/yo/nb/a-colt-is-my-passport-1200-1200-675-675-crop-000000.jpg?v=181eb1dd51",
    "overview": "A hitman finds himself targeted by his own organization after a job.",
    "release_date": "1967-02-04",
    "vote_average": 7.2,
    "runtime": 84,
    "genre_ids": [
      28,
      80,
      53
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 21,
    "title": "A Complete Unknown",
    "poster_path": "https://theposterdb.com/api/assets/1213/view",
    "backdrop_path": "https://theposterdb.com/api/assets/1213/view",
    "overview": "A biopic about the early life and career of Bob Dylan.",
    "release_date": "2024-12-25",
    "vote_average": 0,
    "runtime": 120,
    "genre_ids": [
      18,
      10402
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10402,
        "name": "Música"
      }
    ],
    "tagline": "The story of a voice that changed a generation.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 22,
    "title": "A Confucian Confusion",
    "poster_path": "https://theposterdb.com/api/assets/27006/view",
    "backdrop_path": "https://theposterdb.com/api/assets/27006/view",
    "overview": "A satirical look at modern life in Taipei.",
    "release_date": "1994-09-12",
    "vote_average": 6.9,
    "runtime": 125,
    "genre_ids": [
      35,
      18
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 23,
    "title": "A Dark, Dark Man",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/5/5/1/6/7/6/551676-a-dark-dark-man-0-230-0-345-crop.jpg?v=cc140597e8",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/5/5/1/6/7/6/551676-a-dark-dark-man-0-230-0-345-crop.jpg?v=cc140597e8",
    "overview": "A detective investigates a murder in a remote Kazakh village.",
    "release_date": "2019-09-22",
    "vote_average": 7,
    "runtime": 130,
    "genre_ids": [
      80,
      18
    ],
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 24,
    "title": "A Different Man",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/gp/m2/rs/1m/ADifferentMan-1200-1200-675-675-crop-000000.jpg?v=0ad096bcad",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/gp/m2/rs/1m/ADifferentMan-1200-1200-675-675-crop-000000.jpg?v=0ad096bcad",
    "overview": "An aspiring actor undergoes a radical surgical procedure to drastically transform his appearance.",
    "release_date": "2024-01-21",
    "vote_average": 6.4,
    "runtime": 112,
    "genre_ids": [
      27,
      53,
      18
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "Be careful what you wish for.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 25,
    "title": "A Face in the Crowd",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/A_Face_in_the_Crowd_%281957_poster%29.jpg/1280px-A_Face_in_the_Crowd_%281957_poster%29.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/A_Face_in_the_Crowd_%281957_poster%29.jpg/1280px-A_Face_in_the_Crowd_%281957_poster%29.jpg",
    "overview": "A charismatic drifter becomes a major television personality, but his arrogance and cynical nature threaten to bring him down.",
    "release_date": "1957-05-28",
    "vote_average": 8,
    "runtime": 126,
    "genre_ids": [
      18,
      10402
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10402,
        "name": "Música"
      }
    ],
    "tagline": "Power, love, and the American dream.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 26,
    "title": "A Gentle Breeze in the Village",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/r4/o2/e9/v9/gentle%20breeze-1200-1200-675-675-crop-000000.jpg?v=d9de5f0fa3",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/r4/o2/e9/v9/gentle%20breeze-1200-1200-675-675-crop-000000.jpg?v=d9de5f0fa3",
    "overview": "The story of a young girl growing up in a small, rural Japanese village.",
    "release_date": "2007-07-28",
    "vote_average": 7.3,
    "runtime": 121,
    "genre_ids": [
      18,
      35
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 35,
        "name": "Comédia"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 27,
    "title": "A Happy Family",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/tf/ks/uu/5p/a%20happy-1200-1200-675-675-crop-000000.jpg?v=40ee890acc",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/tf/ks/uu/5p/a%20happy-1200-1200-675-675-crop-000000.jpg?v=40ee890acc",
    "overview": "Eva, a seemingly perfect mother, sees her world crumble when her twin babies are born.",
    "release_date": "2023-11-23",
    "vote_average": 6.2,
    "runtime": 104,
    "genre_ids": [
      18,
      53
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "Puerperium is a bitch.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 28,
    "title": "A Hard Day",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/5/9/2/6/2/5/592625-a-hard-day-0-230-0-345-crop.jpg?v=5a3f63c49d",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/5/9/2/6/2/5/592625-a-hard-day-0-230-0-345-crop.jpg?v=5a3f63c49d",
    "overview": "A corrupt detective covers up a fatal hit-and-run, but a mysterious witness torments him.",
    "release_date": "2014-05-29",
    "vote_average": 7.3,
    "runtime": 111,
    "genre_ids": [
      28,
      80,
      53
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "The worst day of his life is just beginning.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 29,
    "title": "A Haunted Turkish Bathhouse",
    "poster_path": "https://theposterdb.com/api/assets/68725/view",
    "backdrop_path": "https://theposterdb.com/api/assets/68725/view",
    "overview": "A young woman working in a Turkish bathhouse is haunted by the ghost of a cat.",
    "release_date": "1975-10-18",
    "vote_average": 5.6,
    "runtime": 77,
    "genre_ids": [
      27,
      14
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 14,
        "name": "Fantasia"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 30,
    "title": "A Man's Flower Road",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/eu/9k/p8/qa/gFRiPBr1UYGAsFNXaNlygYTc4RT-1200-1200-675-675-crop-000000.jpg?v=92f28e414a",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/eu/9k/p8/qa/gFRiPBr1UYGAsFNXaNlygYTc4RT-1200-1200-675-675-crop-000000.jpg?v=92f28e414a",
    "overview": "A yakuza film about a man trying to leave the life of crime behind.",
    "release_date": "1987-01-01",
    "vote_average": 6,
    "runtime": 90,
    "genre_ids": [
      28,
      80
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 31,
    "title": "A Midsummer's Fantasia",
    "poster_path": "https://theposterdb.com/api/assets/27006/view",
    "backdrop_path": "https://theposterdb.com/api/assets/27006/view",
    "overview": "A Korean filmmaker travels to a small Japanese town and has a chance encounter with a local woman.",
    "release_date": "2014-10-04",
    "vote_average": 6.9,
    "runtime": 97,
    "genre_ids": [
      18,
      10749
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 32,
    "title": "A Moment of Romance",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/if/lz/po/h5/%20moment-1200-1200-675-675-crop-000000.jpg?v=b7f6dd6765",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/if/lz/po/h5/%20moment-1200-1200-675-675-crop-000000.jpg?v=b7f6dd6765",
    "overview": "A young triad member falls for a wealthy young woman.",
    "release_date": "1990-06-14",
    "vote_average": 7.2,
    "runtime": 91,
    "genre_ids": [
      28,
      80,
      10749
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 33,
    "title": "A Night in Nude",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Black_Pond_July_1980.png/1280px-Black_Pond_July_1980.png",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Black_Pond_July_1980.png/1280px-Black_Pond_July_1980.png",
    "overview": "An erotic thriller about a woman who gets involved with a dangerous man.",
    "release_date": "1993-12-18",
    "vote_average": 5.7,
    "runtime": 107,
    "genre_ids": [
      53,
      10749
    ],
    "genres": [
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 34,
    "title": "A Part of Us",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/0/7/4/7/7/2/1074772-a-metade-de-nos-0-230-0-345-crop.jpg?v=ed2d95f40c",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/1/0/7/4/7/7/2/1074772-a-metade-de-nos-0-230-0-345-crop.jpg?v=ed2d95f40c",
    "overview": "A mother and daughter navigate their complex relationship after the death of the family patriarch.",
    "release_date": "2023-04-20",
    "vote_average": 6.5,
    "runtime": 99,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 35,
    "title": "A Personal Journey With Martin Scorsese Through American Movies",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/ch/lc/60/5m/eTzHSpW714SYoR5fjmjDgC5eNRH-1200-1200-675-675-crop-000000.jpg?v=72c0c09d5a",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/ch/lc/60/5m/eTzHSpW714SYoR5fjmjDgC5eNRH-1200-1200-675-675-crop-000000.jpg?v=72c0c09d5a",
    "overview": "Martin Scorsese takes us on a journey through the history of American cinema.",
    "release_date": "1995-05-21",
    "vote_average": 8,
    "runtime": 225,
    "genre_ids": [
      99
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 36,
    "title": "A Quiet Place: Day One",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/2l/mn/p1/9p/quiet%20place-1200-1200-675-675-crop-000000.jpg?v=a215b5c132",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/2l/mn/p1/9p/quiet%20place-1200-1200-675-675-crop-000000.jpg?v=a215b5c132",
    "overview": "Experience the day the world went quiet.",
    "release_date": "2024-06-26",
    "vote_average": 7,
    "runtime": 100,
    "genre_ids": [
      27,
      878,
      53
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 878,
        "name": "Ficção científica"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "Witness the arrival.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 37,
    "title": "A Real Pain",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/j6/nm/pz/7d/cJUaa7KdSgxFMri4hdO6ZnxmLcr-1200-1200-675-675-crop-000000.jpg?v=41e980e877",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/j6/nm/pz/7d/cJUaa7KdSgxFMri4hdO6ZnxmLcr-1200-1200-675-675-crop-000000.jpg?v=41e980e877",
    "overview": "Two cousins travel to Poland to honor their late grandmother and end up joining a Holocaust tour.",
    "release_date": "2024-01-20",
    "vote_average": 7.1,
    "runtime": 90,
    "genre_ids": [
      35,
      18
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "Family can be a real pain.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 38,
    "title": "A Record of Sweet Murder",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/e0/wk/qx/rg/nuST1nEEdHoJMNbEgOIdTShq44t-1200-1200-675-675-crop-000000.jpg?v=db94b93854",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/e0/wk/qx/rg/nuST1nEEdHoJMNbEgOIdTShq44t-1200-1200-675-675-crop-000000.jpg?v=db94b93854",
    "overview": "A journalist is held captive by a serial killer who wants his story told.",
    "release_date": "2014-07-27",
    "vote_average": 6.3,
    "runtime": 86,
    "genre_ids": [
      27,
      53
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 39,
    "title": "A Scene at the Sea",
    "poster_path": "https://theposterdb.com/api/assets/166181/view",
    "backdrop_path": "https://theposterdb.com/api/assets/166181/view",
    "overview": "A deaf garbage collector decides to take up surfing.",
    "release_date": "1991-10-19",
    "vote_average": 7.4,
    "runtime": 101,
    "genre_ids": [
      18,
      10749
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 40,
    "title": "A Short Film About Killing",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/j6/p1/6c/xi/short-film-about-killing-1200-1200-675-675-crop-000000.jpg?v=5141b0753a",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/j6/p1/6c/xi/short-film-about-killing-1200-1200-675-675-crop-000000.jpg?v=5141b0753a",
    "overview": "A senseless murder and its aftermath, exploring the nature of capital punishment.",
    "release_date": "1988-03-11",
    "vote_average": 7.9,
    "runtime": 84,
    "genre_ids": [
      18,
      80
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 41,
    "title": "A Summer at Grandpa's",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/qt/ml/54/4n/b2TZgBgVRqy9UhMXzJ1Ww4NAuNa-1200-1200-675-675-crop-000000.jpg?v=5b60f10703",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/qt/ml/54/4n/b2TZgBgVRqy9UhMXzJ1Ww4NAuNa-1200-1200-675-675-crop-000000.jpg?v=5b60f10703",
    "overview": "Two children from Taipei spend a summer in the country with their grandparents.",
    "release_date": "1984-08-04",
    "vote_average": 7.3,
    "runtime": 93,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 42,
    "title": "A Swedish Love Story",
    "poster_path": "https://theposterdb.com/api/assets/33841/view",
    "backdrop_path": "https://theposterdb.com/api/assets/33841/view",
    "overview": "A gentle and moving story of two teenagers falling in love for the first time.",
    "release_date": "1970-04-24",
    "vote_average": 7.5,
    "runtime": 115,
    "genre_ids": [
      18,
      10749
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 43,
    "title": "A Translator",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/4/2/1/9/7/5/421975-a-translator-0-230-0-345-crop.jpg?v=48eed14c61",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/4/2/1/9/7/5/421975-a-translator-0-230-0-345-crop.jpg?v=48eed14c61",
    "overview": "A Russian literature professor is assigned to translate for child victims of the Chernobyl disaster in Cuba.",
    "release_date": "2018-01-19",
    "vote_average": 7.4,
    "runtime": 107,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 44,
    "title": "A Traveler's Needs",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/4f/1d/qe/vq/ATravelersNeeds-1200-1200-675-675-crop-000000.jpg?v=cc6694749d",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/4f/1d/qe/vq/ATravelersNeeds-1200-1200-675-675-crop-000000.jpg?v=cc6694749d",
    "overview": "A woman from France becomes a French teacher for two Korean women.",
    "release_date": "2024-02-19",
    "vote_average": 6.8,
    "runtime": 90,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 45,
    "title": "A Última Praga de Mojica",
    "poster_path": "https://picsum.photos/seed/45/500/750",
    "backdrop_path": "https://picsum.photos/seed/bp45/1280/720",
    "overview": "A documentary about the life and work of Brazilian horror filmmaker José Mojica Marins.",
    "release_date": "2021-10-28",
    "vote_average": 7,
    "runtime": 85,
    "genre_ids": [
      99
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 46,
    "title": "A Very Curious Girl",
    "poster_path": "https://theposterdb.com/api/assets/192789/view",
    "backdrop_path": "https://theposterdb.com/api/assets/192789/view",
    "overview": "A young woman and her mother move to a small village and shake up the local community.",
    "release_date": "1969-09-03",
    "vote_average": 6.6,
    "runtime": 94,
    "genre_ids": [
      35,
      18
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 47,
    "title": "A Visitor from the Living",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/4/42/Nana_Visitor_%2853371445409%29.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/4/42/Nana_Visitor_%2853371445409%29.jpg",
    "overview": "Claude Lanzmann interviews a former Red Cross representative about his visit to the Theresienstadt concentration camp.",
    "release_date": "1997-11-19",
    "vote_average": 7.5,
    "runtime": 68,
    "genre_ids": [
      99
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 48,
    "title": "A Visitor to a Museum",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/vh/b1/97/1r/visitor-to-museum-1200-1200-675-675-crop-000000.jpg?v=66ac7f539b",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/vh/b1/97/1r/visitor-to-museum-1200-1200-675-675-crop-000000.jpg?v=66ac7f539b",
    "overview": "In a post-apocalyptic world, a man journeys to a mysterious museum.",
    "release_date": "1989-06-17",
    "vote_average": 6.9,
    "runtime": 136,
    "genre_ids": [
      878,
      18
    ],
    "genres": [
      {
        "id": 878,
        "name": "Ficção científica"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 49,
    "title": "A Woman Under the Influence",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/A_Woman_Under_the_Influence_%281974_poster_-_retouched%29.jpg/1280px-A_Woman_Under_the_Influence_%281974_poster_-_retouched%29.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/A_Woman_Under_the_Influence_%281974_poster_-_retouched%29.jpg/1280px-A_Woman_Under_the_Influence_%281974_poster_-_retouched%29.jpg",
    "overview": "A woman's increasingly strange behavior strains her marriage and family.",
    "release_date": "1974-11-18",
    "vote_average": 8.1,
    "runtime": 155,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 50,
    "title": "A Wounded Fawn",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/kw/cn/rl/a5/wounded-1200-1200-675-675-crop-000000.jpg?v=b08bcff88c",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/kw/cn/rl/a5/wounded-1200-1200-675-675-crop-000000.jpg?v=b08bcff88c",
    "overview": "A serial killer takes his latest victim to a remote cabin, but she's not as helpless as she seems.",
    "release_date": "2022-12-01",
    "vote_average": 6,
    "runtime": 91,
    "genre_ids": [
      27,
      53
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "Beware the fury of a patient woman.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 51,
    "title": "Aavesham",
    "poster_path": "https://theposterdb.com/api/assets/503743/view",
    "backdrop_path": "https://theposterdb.com/api/assets/503743/view",
    "overview": "Three college students get involved with a local gangster.",
    "release_date": "2024-04-11",
    "vote_average": 7.5,
    "runtime": 158,
    "genre_ids": [
      28,
      35
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 35,
        "name": "Comédia"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 52,
    "title": "Abiding Nowhere",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/y6/x5/b8/2l/r75TN0IBAEJE3qycVcEPPUHO0S8-1200-1200-675-675-crop-000000.jpg?v=8b018e19a3",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/y6/x5/b8/2l/r75TN0IBAEJE3qycVcEPPUHO0S8-1200-1200-675-675-crop-000000.jpg?v=8b018e19a3",
    "overview": "A man wanders through a city, contemplating his life and existence.",
    "release_date": "2024-02-17",
    "vote_average": 6,
    "runtime": 83,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 53,
    "title": "About Dry Grasses",
    "poster_path": "https://theposterdb.com/api/assets/477269/view",
    "backdrop_path": "https://theposterdb.com/api/assets/477269/view",
    "overview": "A young teacher in a remote Anatolian village struggles with his sense of purpose.",
    "release_date": "2023-07-12",
    "vote_average": 7.8,
    "runtime": 197,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 54,
    "title": "About Endlessness",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/8d/2w/tc/tx/rS82bCzK8l35MGxsYAx6fegiXIs-1200-1200-675-675-crop-000000.jpg?v=576a8af693",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/8d/2w/tc/tx/rS82bCzK8l35MGxsYAx6fegiXIs-1200-1200-675-675-crop-000000.jpg?v=576a8af693",
    "overview": "A series of vignettes about life, death, and everything in between.",
    "release_date": "2019-09-03",
    "vote_average": 7.1,
    "runtime": 78,
    "genre_ids": [
      18,
      14
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 14,
        "name": "Fantasia"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 55,
    "title": "Accattone",
    "poster_path": "https://theposterdb.com/api/assets/402532/view",
    "backdrop_path": "https://theposterdb.com/api/assets/402532/view",
    "overview": "The story of a pimp in Rome who struggles to find meaning in his life.",
    "release_date": "1961-11-22",
    "vote_average": 7.5,
    "runtime": 120,
    "genre_ids": [
      18,
      80
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 56,
    "title": "Achilles and the Tortoise",
    "poster_path": "https://theposterdb.com/api/assets/580776/view",
    "backdrop_path": "https://theposterdb.com/api/assets/580776/view",
    "overview": "A painter struggles with his art and his relationships.",
    "release_date": "2008-08-28",
    "vote_average": 7,
    "runtime": 119,
    "genre_ids": [
      35,
      18
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 57,
    "title": "Actually...",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/0/6/2/0/3/7/1062037-actually-0-230-0-345-crop.jpg?v=d4e83bfab4",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/1/0/6/2/0/3/7/1062037-actually-0-230-0-345-crop.jpg?v=d4e83bfab4",
    "overview": "A romantic comedy about two people who meet through a dating app.",
    "release_date": "2022-10-07",
    "vote_average": 6,
    "runtime": 100,
    "genre_ids": [
      10749,
      35
    ],
    "genres": [
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 35,
        "name": "Comédia"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 58,
    "title": "Adagio",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/9/9/1/9/6/6/991966-adagio-2023-0-230-0-345-crop.jpg?v=437bb682f8",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/9/9/1/9/6/6/991966-adagio-2023-0-230-0-345-crop.jpg?v=437bb682f8",
    "overview": "A young man gets caught up in the criminal underworld of Rome.",
    "release_date": "2023-12-14",
    "vote_average": 6.5,
    "runtime": 127,
    "genre_ids": [
      80,
      18,
      53
    ],
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 59,
    "title": "After Life",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/8c/n2/jy/qf/after-1200-1200-675-675-crop-000000.jpg?v=1f69907e9e",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/8c/n2/jy/qf/after-1200-1200-675-675-crop-000000.jpg?v=1f69907e9e",
    "overview": "In the afterlife, people must choose one memory to take with them for eternity.",
    "release_date": "1998-09-11",
    "vote_average": 7.6,
    "runtime": 119,
    "genre_ids": [
      14,
      18
    ],
    "genres": [
      {
        "id": 14,
        "name": "Fantasia"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 60,
    "title": "AGGRO DR1FT",
    "poster_path": "https://theposterdb.com/api/assets/458748/view",
    "backdrop_path": "https://theposterdb.com/api/assets/458748/view",
    "overview": "An experimental film shot entirely in infrared.",
    "release_date": "2023-09-02",
    "vote_average": 5.8,
    "runtime": 80,
    "genre_ids": [
      28,
      80
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 61,
    "title": "Aimée & Jaguar",
    "poster_path": "https://picsum.photos/seed/61/500/750",
    "backdrop_path": "https://picsum.photos/seed/bp61/1280/720",
    "overview": "The true story of a love affair between a Jewish woman and the wife of a Nazi officer in Berlin.",
    "release_date": "1999-02-11",
    "vote_average": 7.1,
    "runtime": 125,
    "genre_ids": [
      18,
      10749,
      10752
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 10752,
        "name": "Guerra"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 62,
    "title": "Alemania",
    "poster_path": "https://theposterdb.com/api/assets/493430/view",
    "backdrop_path": "https://theposterdb.com/api/assets/493430/view",
    "overview": "A young woman travels to Germany to learn more about her family history.",
    "release_date": "2023-04-20",
    "vote_average": 6,
    "runtime": 87,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 63,
    "title": "Alice in the Cities",
    "poster_path": "https://theposterdb.com/api/assets/92914/view",
    "backdrop_path": "https://theposterdb.com/api/assets/92914/view",
    "overview": "A German journalist gets stranded in New York with a young girl.",
    "release_date": "1974-03-03",
    "vote_average": 7.6,
    "runtime": 113,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 64,
    "title": "Alien: Romulus",
    "poster_path": "https://theposterdb.com/api/assets/525287/view",
    "backdrop_path": "https://theposterdb.com/api/assets/525287/view",
    "overview": "While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.",
    "release_date": "2024-08-14",
    "vote_average": 7.5,
    "runtime": 118,
    "genre_ids": [
      878,
      27,
      53
    ],
    "genres": [
      {
        "id": 878,
        "name": "Ficção científica"
      },
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "Never leave a friend behind.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 65,
    "title": "All Shall Be Well",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/va/pi/of/5r/oooYaQb5G7vwdu0GSN7BOm9nFZw-1200-1200-675-675-crop-000000.jpg?v=46559f71a5",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/va/pi/of/5r/oooYaQb5G7vwdu0GSN7BOm9nFZw-1200-1200-675-675-crop-000000.jpg?v=46559f71a5",
    "overview": "A woman grapples with the death of her long-term partner and the legal and financial challenges that follow.",
    "release_date": "2024-02-16",
    "vote_average": 6.9,
    "runtime": 93,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 66,
    "title": "All We Imagine as Light",
    "poster_path": "https://theposterdb.com/api/assets/560402/view",
    "backdrop_path": "https://theposterdb.com/api/assets/560402/view",
    "overview": "Two nurses in Mumbai find their lives intertwined as they navigate their relationships, careers, and the bustling city.",
    "release_date": "2024-05-23",
    "vote_average": 7.5,
    "runtime": 115,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 67,
    "title": "Allegro non troppo",
    "poster_path": "https://theposterdb.com/api/assets/199635/view",
    "backdrop_path": "https://theposterdb.com/api/assets/199635/view",
    "overview": "An animated film that parodies Disney's Fantasia.",
    "release_date": "1976-03-04",
    "vote_average": 7.4,
    "runtime": 85,
    "genre_ids": [
      16,
      35,
      10402
    ],
    "genres": [
      {
        "id": 16,
        "name": "Animação"
      },
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 10402,
        "name": "Música"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 68,
    "title": "Alone in the Night",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/vc/ly/l8/hg/fs4kUYvlXsIw3vJV39nn7RwzL4p-1200-1200-675-675-crop-000000.jpg?v=1520fec753",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/vc/ly/l8/hg/fs4kUYvlXsIw3vJV39nn7RwzL4p-1200-1200-675-675-crop-000000.jpg?v=1520fec753",
    "overview": "A lonely woman begins a dangerous affair with a yakuza.",
    "release_date": "1994-09-23",
    "vote_average": 6,
    "runtime": 103,
    "genre_ids": [
      18,
      80
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 69,
    "title": "Aloners",
    "poster_path": "https://theposterdb.com/api/assets/628329/view",
    "backdrop_path": "https://theposterdb.com/api/assets/628329/view",
    "overview": "A solitary woman who prefers to be alone must confront her past and open up to others.",
    "release_date": "2021-05-19",
    "vote_average": 6.8,
    "runtime": 91,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 70,
    "title": "Amarcord",
    "poster_path": "https://theposterdb.com/api/assets/92917/view",
    "backdrop_path": "https://theposterdb.com/api/assets/92917/view",
    "overview": "A nostalgic look at life in a small Italian town during the Fascist era.",
    "release_date": "1973-12-18",
    "vote_average": 7.8,
    "runtime": 123,
    "genre_ids": [
      35,
      18
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "I remember.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 71,
    "title": "Ambivalent Future: Kiyoshi Kurosawa",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/3/1/2/0/2/7/312027-the-ambivalent-future-kiyoshi-kurosawa-0-230-0-345-crop.jpg?v=ce8cd08501",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/3/1/2/0/2/7/312027-the-ambivalent-future-kiyoshi-kurosawa-0-230-0-345-crop.jpg?v=ce8cd08501",
    "overview": "A documentary about the films of Japanese director Kiyoshi Kurosawa.",
    "release_date": "2003-01-01",
    "vote_average": 6,
    "runtime": 53,
    "genre_ids": [
      99
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 72,
    "title": "American Gigolo",
    "poster_path": "https://theposterdb.com/api/assets/194720/view",
    "backdrop_path": "https://theposterdb.com/api/assets/194720/view",
    "overview": "A high-priced male escort finds himself a suspect in a murder case.",
    "release_date": "1980-02-08",
    "vote_average": 6.4,
    "runtime": 117,
    "genre_ids": [
      80,
      18,
      53,
      10749
    ],
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "He's the highest-paid lover in Beverly Hills. He leaves women feeling more alive than they've ever felt before. But he's about to fall in love. And it's going to be a crime.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 73,
    "title": "Amor e Sorte",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Maria_Sorte.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Maria_Sorte.jpg",
    "overview": "A Brazilian TV series created during the COVID-19 pandemic, exploring love and relationships in isolation.",
    "release_date": "2020-09-08",
    "vote_average": 7,
    "runtime": 120,
    "genre_ids": [
      35,
      18,
      10749
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 74,
    "title": "Amusement Park",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Pripyat_AmusementPark.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Pripyat_AmusementPark.jpg",
    "overview": "A long-lost film by George A. Romero, a surreal and disturbing look at the horrors of aging.",
    "release_date": "2024-02-15",
    "vote_average": 6.3,
    "runtime": 53,
    "genre_ids": [
      27,
      18
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "The scariest ride of all is life itself.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 75,
    "title": "An Affair to Remember",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/oo/zb/q9/dl/affair-to-remember-1200-1200-675-675-crop-000000.jpg?v=8a6a174a6a",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/oo/zb/q9/dl/affair-to-remember-1200-1200-675-675-crop-000000.jpg?v=8a6a174a6a",
    "overview": "Two people meet on a cruise and fall in love, but they are both engaged to others. They agree to meet six months later at the top of the Empire State Building.",
    "release_date": "1957-07-02",
    "vote_average": 7.4,
    "runtime": 119,
    "genre_ids": [
      18,
      10749
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "A story to remember.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 76,
    "title": "An Invisible Victim: The Eliza Samudio Case",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/2/4/3/7/1/5/1243715-an-invisible-victim-the-eliza-samudio-case-0-230-0-345-crop.jpg?v=4dde53d1f2",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/1/2/4/3/7/1/5/1243715-an-invisible-victim-the-eliza-samudio-case-0-230-0-345-crop.jpg?v=4dde53d1f2",
    "overview": "A documentary about the murder of Eliza Samudio, a Brazilian model, and the involvement of her former lover, a famous soccer player.",
    "release_date": "2024-03-14",
    "vote_average": 7,
    "runtime": 90,
    "genre_ids": [
      99,
      80
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      },
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 77,
    "title": "Andrei Rublev",
    "poster_path": "https://theposterdb.com/api/assets/92921/view",
    "backdrop_path": "https://theposterdb.com/api/assets/92921/view",
    "overview": "A historical drama about the life of the great 15th-century Russian icon painter, Andrei Rublev.",
    "release_date": "1966-12-19",
    "vote_average": 8.1,
    "runtime": 205,
    "genre_ids": [
      18,
      36
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 36,
        "name": "História"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 78,
    "title": "Andrey Tarkovsky. A Cinema Prayer",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Andrei_tarkovsky_stamp_russia_2007.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Andrei_tarkovsky_stamp_russia_2007.jpg",
    "overview": "A documentary about the life and work of the great Russian filmmaker, Andrei Tarkovsky.",
    "release_date": "2019-09-04",
    "vote_average": 7.5,
    "runtime": 97,
    "genre_ids": [
      99
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 79,
    "title": "Angst",
    "poster_path": "https://picsum.photos/seed/placeholder/500/750",
    "backdrop_path": "https://picsum.photos/seed/placeholder/500/750",
    "overview": "A visceral and disturbing film about a serial killer, told from his perspective.",
    "release_date": "1983-05-27",
    "vote_average": 7.2,
    "runtime": 83,
    "genre_ids": [
      27,
      80,
      53
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "The fear is real.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 80,
    "title": "Anhell69",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/1t/rw/bw/kh/anhell-1200-1200-675-675-crop-000000.jpg?v=40f033b2d9",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/1t/rw/bw/kh/anhell-1200-1200-675-675-crop-000000.jpg?v=40f033b2d9",
    "overview": "A documentary about a group of young queer people in Medellín, Colombia, who find community and escape through a B-movie horror film.",
    "release_date": "2022-09-01",
    "vote_average": 6.8,
    "runtime": 74,
    "genre_ids": [
      99
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 81,
    "title": "Anna",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/6/62/Anna_Lore_PSA_cropped.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/6/62/Anna_Lore_PSA_cropped.jpg",
    "overview": "A documentary that follows a young girl named Anna from the age of 6 to 18, offering a unique look at growing up in the Soviet Union.",
    "release_date": "1993-09-08",
    "vote_average": 7.3,
    "runtime": 100,
    "genre_ids": [
      99
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 82,
    "title": "Anonymous",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/6/8/6/5/16865-anonymous-0-230-0-345-crop.jpg?v=157242a507",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/1/6/8/6/5/16865-anonymous-0-230-0-345-crop.jpg?v=157242a507",
    "overview": "A political thriller that explores the theory that William Shakespeare was a fraud.",
    "release_date": "2004-09-12",
    "vote_average": 6.9,
    "runtime": 130,
    "genre_ids": [
      18,
      53
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "Was Shakespeare a fraud?",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 83,
    "title": "Anora",
    "poster_path": "https://theposterdb.com/api/assets/525935/view",
    "backdrop_path": "https://theposterdb.com/api/assets/525935/view",
    "overview": "A young Brooklyn sex worker impulsively marries the son of a Russian oligarch, but when his parents arrive to annul the marriage, her fairytale turns into a fight to stay in America.",
    "release_date": "2024-05-21",
    "vote_average": 7.6,
    "runtime": 138,
    "genre_ids": [
      35,
      18,
      53
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "She fell in love with the wrong fairytale.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 84,
    "title": "Antichrist",
    "poster_path": "https://theposterdb.com/api/assets/92922/view",
    "backdrop_path": "https://theposterdb.com/api/assets/92922/view",
    "overview": "A grieving couple retreats to their cabin in the woods, where they experience strange and terrifying events.",
    "release_date": "2009-05-20",
    "vote_average": 6.7,
    "runtime": 108,
    "genre_ids": [
      18,
      27
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 27,
        "name": "Terror"
      }
    ],
    "tagline": "Chaos reigns.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 85,
    "title": "Antiporno",
    "poster_path": "https://theposterdb.com/api/assets/634060/view",
    "backdrop_path": "https://theposterdb.com/api/assets/634060/view",
    "overview": "An artist struggles with her identity and sexuality in a surreal and dreamlike world.",
    "release_date": "2016-11-25",
    "vote_average": 6.3,
    "runtime": 76,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 86,
    "title": "Antiviral",
    "poster_path": "https://theposterdb.com/api/assets/626509/view",
    "backdrop_path": "https://theposterdb.com/api/assets/626509/view",
    "overview": "In a world where fans can buy viruses from their favorite celebrities, a clinic employee finds himself in a deadly conspiracy.",
    "release_date": "2012-05-19",
    "vote_average": 6,
    "runtime": 108,
    "genre_ids": [
      27,
      878,
      53
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 878,
        "name": "Ficção científica"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "Celebrity obsession has gone too far.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 87,
    "title": "Apartment 7A",
    "poster_path": "https://theposterdb.com/api/assets/516803/view",
    "backdrop_path": "https://theposterdb.com/api/assets/516803/view",
    "overview": "A prequel to Rosemary's Baby, exploring the events that led to the demonic pregnancy.",
    "release_date": "2024-10-25",
    "vote_average": 6.7,
    "runtime": 104,
    "genre_ids": [
      27
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      }
    ],
    "tagline": "Every story has a beginning.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 88,
    "title": "Apple Music Live: Björk",
    "poster_path": "https://theposterdb.com/api/assets/682339/view",
    "backdrop_path": "https://theposterdb.com/api/assets/682339/view",
    "overview": "A live performance by the iconic Icelandic artist, Björk.",
    "release_date": "2025-01-01",
    "vote_average": 8,
    "runtime": 90,
    "genre_ids": [
      10402
    ],
    "genres": [
      {
        "id": 10402,
        "name": "Música"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 89,
    "title": "Arabian Nights",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/6u/5f/sa/3y/arabian-nights-1200-1200-675-675-crop-000000.jpg?v=9567b58546",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/6u/5f/sa/3y/arabian-nights-1200-1200-675-675-crop-000000.jpg?v=9567b58546",
    "overview": "Pier Paolo Pasolini's final film in his Trilogy of Life, a collection of erotic and fantastic tales from the Arabian Nights.",
    "release_date": "1974-06-20",
    "vote_average": 7,
    "runtime": 130,
    "genre_ids": [
      14,
      18,
      10749
    ],
    "genres": [
      {
        "id": 14,
        "name": "Fantasia"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 90,
    "title": "As Cangaceiras Eróticas",
    "poster_path": "https://picsum.photos/seed/90/500/750",
    "backdrop_path": "https://picsum.photos/seed/bp90/1280/720",
    "overview": "A Brazilian erotic comedy about a group of female outlaws in the Brazilian backlands.",
    "release_date": "1974-01-01",
    "vote_average": 4.5,
    "runtime": 85,
    "genre_ids": [
      35,
      12
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 12,
        "name": "Aventura"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 91,
    "title": "As I Was Moving Ahead, Occasionally I Saw Brief Glimpses of Beauty",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/bc/81/v6/ps/as-i-was-moving-ahead-occasionally-1200-1200-675-675-crop-000000.jpg?v=03faa9a862",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/bc/81/v6/ps/as-i-was-moving-ahead-occasionally-1200-1200-675-675-crop-000000.jpg?v=03faa9a862",
    "overview": "A monumental work of avant-garde cinema, a nearly 5-hour long home movie by Jonas Mekas.",
    "release_date": "2000-11-17",
    "vote_average": 7.7,
    "runtime": 288,
    "genre_ids": [
      99
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 92,
    "title": "Asako I & II",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/je/1o/n1/ur/asako-1200-1200-675-675-crop-000000.jpg?v=78dce22297",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/je/1o/n1/ur/asako-1200-1200-675-675-crop-000000.jpg?v=78dce22297",
    "overview": "A young woman falls in love with a man who suddenly disappears. Two years later, she meets another man who looks exactly like him.",
    "release_date": "2018-09-01",
    "vote_average": 6.9,
    "runtime": 119,
    "genre_ids": [
      18,
      10749
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 93,
    "title": "Ash",
    "poster_path": "https://theposterdb.com/api/assets/596538/view",
    "backdrop_path": "https://theposterdb.com/api/assets/596538/view",
    "overview": "A sci-fi thriller about a woman who wakes up on a distant planet to find her crewmates have been murdered.",
    "release_date": "2025-01-01",
    "vote_average": 6.9,
    "runtime": 109,
    "genre_ids": [
      878,
      53
    ],
    "genres": [
      {
        "id": 878,
        "name": "Ficção científica"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "Survival is only the beginning.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 94,
    "title": "Ashes and Diamonds",
    "poster_path": "https://theposterdb.com/api/assets/92927/view",
    "backdrop_path": "https://theposterdb.com/api/assets/92927/view",
    "overview": "A young Polish resistance fighter is ordered to assassinate a communist official on the last day of World War II.",
    "release_date": "1958-10-03",
    "vote_average": 7.8,
    "runtime": 103,
    "genre_ids": [
      18,
      10752,
      28
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10752,
        "name": "Guerra"
      },
      {
        "id": 28,
        "name": "Ação"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 95,
    "title": "Asparagus",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/4m/4y/tq/qr/asparagus-1200-1200-675-675-crop-000000.jpg?v=06674771b5",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/4m/4y/tq/qr/asparagus-1200-1200-675-675-crop-000000.jpg?v=06674771b5",
    "overview": "A surreal animated short film.",
    "release_date": "1979-01-01",
    "vote_average": 6.6,
    "runtime": 19,
    "genre_ids": [
      16,
      14
    ],
    "genres": [
      {
        "id": 16,
        "name": "Animação"
      },
      {
        "id": 14,
        "name": "Fantasia"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 96,
    "title": "At Midnight I'll Take Your Soul",
    "poster_path": "https://theposterdb.com/api/assets/632955/view",
    "backdrop_path": "https://theposterdb.com/api/assets/632955/view",
    "overview": "A creepy undertaker, Coffin Joe, is determined to have a son, and he will stop at nothing to achieve his goal.",
    "release_date": "1964-11-09",
    "vote_average": 6.8,
    "runtime": 82,
    "genre_ids": [
      27
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 97,
    "title": "Au Hasard Balthazar",
    "poster_path": "https://theposterdb.com/api/assets/92928/view",
    "backdrop_path": "https://theposterdb.com/api/assets/92928/view",
    "overview": "The life of a donkey named Balthazar, as he is passed from owner to owner.",
    "release_date": "1966-05-25",
    "vote_average": 7.8,
    "runtime": 95,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 98,
    "title": "Au Revoir les Enfants",
    "poster_path": "https://theposterdb.com/api/assets/60731/view",
    "backdrop_path": "https://theposterdb.com/api/assets/60731/view",
    "overview": "A French boarding school during World War II, where a young boy befriends a new student who is hiding a secret.",
    "release_date": "1987-10-07",
    "vote_average": 8,
    "runtime": 104,
    "genre_ids": [
      18,
      10752
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10752,
        "name": "Guerra"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 99,
    "title": "Azrael",
    "poster_path": "https://theposterdb.com/api/assets/530098/view",
    "backdrop_path": "https://theposterdb.com/api/assets/530098/view",
    "overview": "In a post-apocalyptic world, a young woman is hunted by a cult of fanatics.",
    "release_date": "2024-03-09",
    "vote_average": 6,
    "runtime": 90,
    "genre_ids": [
      27,
      28,
      53
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "The end is only the beginning.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 100,
    "title": "Baby",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/0/9/8/4/0/5/1098405-baby-0-230-0-345-crop.jpg?v=09cfc989ab",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/1/0/9/8/4/0/5/1098405-baby-0-230-0-345-crop.jpg?v=09cfc989ab",
    "overview": "A young drug-addicted woman sells her newborn baby to a woman who is unable to have children.",
    "release_date": "2024-05-22",
    "vote_average": 6,
    "runtime": 135,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 101,
    "title": "Baby Assassins",
    "poster_path": "https://theposterdb.com/api/assets/575752/view",
    "backdrop_path": "https://theposterdb.com/api/assets/575752/view",
    "overview": "Two teenage assassins try to live a normal life as roommates.",
    "release_date": "2021-07-30",
    "vote_average": 6.9,
    "runtime": 95,
    "genre_ids": [
      28,
      35
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 35,
        "name": "Comédia"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 102,
    "title": "Baby Invasion",
    "poster_path": "https://a.ltrbxd.com/resized/alternative-backdrop/1/1/4/6/6/3/8/tmdb/65MjUv58XqVWyXl4ACH6D7KHG4R-1200-1200-675-675-crop-000000.jpg?v=fdd667995b",
    "backdrop_path": "https://a.ltrbxd.com/resized/alternative-backdrop/1/1/4/6/6/3/8/tmdb/65MjUv58XqVWyXl4ACH6D7KHG4R-1200-1200-675-675-crop-000000.jpg?v=fdd667995b",
    "overview": "A satirical horror film about a group of babies who become possessed and wreak havoc.",
    "release_date": "2024-01-01",
    "vote_average": 5,
    "runtime": 80,
    "genre_ids": [
      27,
      35
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 35,
        "name": "Comédia"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 103,
    "title": "Babygirl",
    "poster_path": "https://theposterdb.com/api/assets/554399/view",
    "backdrop_path": "https://theposterdb.com/api/assets/554399/view",
    "overview": "A successful CEO begins an illicit affair with her much younger intern.",
    "release_date": "2024-08-30",
    "vote_average": 6.8,
    "runtime": 112,
    "genre_ids": [
      18,
      53
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "Power. Seduction. Betrayal.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 104,
    "title": "Bad Boy Bubby",
    "poster_path": "https://theposterdb.com/api/assets/129133/view",
    "backdrop_path": "https://theposterdb.com/api/assets/129133/view",
    "overview": "A man who has been locked in a room his entire life is finally released into the world.",
    "release_date": "1993-09-02",
    "vote_average": 7.2,
    "runtime": 114,
    "genre_ids": [
      35,
      18,
      80
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 105,
    "title": "Bad Boys: Ride or Die",
    "poster_path": "https://theposterdb.com/api/assets/510340/view",
    "backdrop_path": "https://theposterdb.com/api/assets/510340/view",
    "overview": "Miami's finest are back, but this time they're on the run.",
    "release_date": "2024-06-05",
    "vote_average": 7,
    "runtime": 115,
    "genre_ids": [
      28,
      80,
      53,
      35
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 35,
        "name": "Comédia"
      }
    ],
    "tagline": "Miami's finest are now Miami's most wanted.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 106,
    "title": "Bad Girls Go to Hell",
    "poster_path": "https://theposterdb.com/api/assets/506699/view",
    "backdrop_path": "https://theposterdb.com/api/assets/506699/view",
    "overview": "A woman on the run from the law finds herself in a series of increasingly bizarre and dangerous situations.",
    "release_date": "1965-01-01",
    "vote_average": 5.5,
    "runtime": 71,
    "genre_ids": [
      18,
      80
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 107,
    "title": "Bad Lieutenant",
    "poster_path": "https://theposterdb.com/api/assets/205954/view",
    "backdrop_path": "https://theposterdb.com/api/assets/205954/view",
    "overview": "A corrupt and drug-addicted NYPD detective investigates the rape of a nun.",
    "release_date": "1992-09-26",
    "vote_average": 6.9,
    "runtime": 96,
    "genre_ids": [
      80,
      18
    ],
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "The story of a man who has gone to hell and is on his way back.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 108,
    "title": "Bananas",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/f4/60/m1/df/bnJrWEST2YVuWfZiYP4owjXpjwq-1200-1200-675-675-crop-000000.jpg?v=91138d60e2",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/f4/60/m1/df/bnJrWEST2YVuWfZiYP4owjXpjwq-1200-1200-675-675-crop-000000.jpg?v=91138d60e2",
    "overview": "A bumbling New Yorker gets involved in a Latin American revolution.",
    "release_date": "1971-04-28",
    "vote_average": 6.9,
    "runtime": 82,
    "genre_ids": [
      35,
      10749
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 109,
    "title": "Banel & Adama",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/44/ln/ge/st/banel-1200-1200-675-675-crop-000000.jpg?v=473b61b435",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/44/ln/ge/st/banel-1200-1200-675-675-crop-000000.jpg?v=473b61b435",
    "overview": "In a remote Senegalese village, two young lovers defy their community's traditions.",
    "release_date": "2023-12-13",
    "vote_average": 6.7,
    "runtime": 87,
    "genre_ids": [
      18,
      10749
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 110,
    "title": "Barefoot in the Park",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/n9/99/cj/mp/barefoot-1200-1200-675-675-crop-000000.jpg?v=fc4536da79",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/n9/99/cj/mp/barefoot-1200-1200-675-675-crop-000000.jpg?v=fc4536da79",
    "overview": "A conservative young lawyer and his free-spirited wife move into a tiny, fifth-floor walk-up apartment in Greenwich Village.",
    "release_date": "1967-05-25",
    "vote_average": 7.2,
    "runtime": 106,
    "genre_ids": [
      35,
      10749
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 111,
    "title": "Bargain",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/c7/1l/z8/a9/bargain-1200-1200-675-675-crop-000000.jpg?v=10dfe8531d",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/c7/1l/z8/a9/bargain-1200-1200-675-675-crop-000000.jpg?v=10dfe8531d",
    "overview": "A short film about a man who gets more than he bargained for when he tries to buy a prostitute.",
    "release_date": "2015-10-04",
    "vote_average": 6.8,
    "runtime": 14,
    "genre_ids": [
      53
    ],
    "genres": [
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 112,
    "title": "Barren Illusion",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/76/5o/as/jj/4aTw7JzhQm6olLG2pKoYfe5xnzx-1200-1200-675-675-crop-000000.jpg?v=4af9f19566",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/76/5o/as/jj/4aTw7JzhQm6olLG2pKoYfe5xnzx-1200-1200-675-675-crop-000000.jpg?v=4af9f19566",
    "overview": "A group of people in Tokyo are connected by a series of strange and seemingly random events.",
    "release_date": "1999-12-18",
    "vote_average": 6.5,
    "runtime": 100,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 113,
    "title": "Barton Fink",
    "poster_path": "https://theposterdb.com/api/assets/50646/view",
    "backdrop_path": "https://theposterdb.com/api/assets/50646/view",
    "overview": "A New York playwright moves to Hollywood and finds himself with a severe case of writer's block.",
    "release_date": "1991-08-21",
    "vote_average": 7.6,
    "runtime": 116,
    "genre_ids": [
      18,
      35,
      53
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "The common man will not be denied.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 114,
    "title": "Batman",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/jk/ll/jw/r5/batman-1200-1200-675-675-crop-000000.jpg?v=05d77968cf",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/jk/ll/jw/r5/batman-1200-1200-675-675-crop-000000.jpg?v=05d77968cf",
    "overview": "The campy 1960s Batman movie, based on the popular TV series.",
    "release_date": "1966-07-30",
    "vote_average": 6.3,
    "runtime": 105,
    "genre_ids": [
      10751,
      12,
      35,
      878
    ],
    "genres": [
      {
        "id": 10751,
        "name": "Família"
      },
      {
        "id": 12,
        "name": "Aventura"
      },
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 878,
        "name": "Ficção científica"
      }
    ],
    "tagline": "He's the hero Gotham deserves... and needs right now. So we'll hunt him. Because he can take it. Because he's not our hero. He's a silent guardian, a watchful protector. A dark knight.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 115,
    "title": "Battleship Potemkin",
    "poster_path": "https://theposterdb.com/api/assets/189147/view",
    "backdrop_path": "https://theposterdb.com/api/assets/189147/view",
    "overview": "A landmark film of silent cinema, depicting a mutiny on a Russian battleship and the subsequent massacre of civilians.",
    "release_date": "1925-12-24",
    "vote_average": 7.7,
    "runtime": 75,
    "genre_ids": [
      18,
      36
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 36,
        "name": "História"
      }
    ],
    "tagline": "The film that shook the world.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 116,
    "title": "Beaten to Death",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/vo/96/iz/ir/beaten-1200-1200-675-675-crop-000000.jpg?v=7e86efc09f",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/vo/96/iz/ir/beaten-1200-1200-675-675-crop-000000.jpg?v=7e86efc09f",
    "overview": "A man is left for dead in the Australian outback and must fight for survival.",
    "release_date": "2022-10-22",
    "vote_average": 6,
    "runtime": 93,
    "genre_ids": [
      27,
      53
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 117,
    "title": "Beating Hearts",
    "poster_path": "https://theposterdb.com/api/assets/591311/view",
    "backdrop_path": "https://theposterdb.com/api/assets/591311/view",
    "overview": "A sprawling romance about two teenagers from different social classes who fall in love.",
    "release_date": "2024-09-04",
    "vote_average": 7,
    "runtime": 166,
    "genre_ids": [
      10749,
      35,
      80,
      18
    ],
    "genres": [
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "Love is a battlefield.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 118,
    "title": "Beau Travail",
    "poster_path": "https://theposterdb.com/api/assets/120546/view",
    "backdrop_path": "https://theposterdb.com/api/assets/120546/view",
    "overview": "A French Foreign Legion sergeant becomes obsessed with a new recruit.",
    "release_date": "1999-09-04",
    "vote_average": 7.3,
    "runtime": 92,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 119,
    "title": "Beauty and the Beast",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/fr/m8/1f/r8/beauty-1200-1200-675-675-crop-000000.jpg?v=55f6591fa0",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/fr/m8/1f/r8/beauty-1200-1200-675-675-crop-000000.jpg?v=55f6591fa0",
    "overview": "A dark and atmospheric adaptation of the classic fairy tale.",
    "release_date": "1978-10-01",
    "vote_average": 7.2,
    "runtime": 83,
    "genre_ids": [
      14,
      27,
      10749
    ],
    "genres": [
      {
        "id": 14,
        "name": "Fantasia"
      },
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 120,
    "title": "Beauty and the Dogs",
    "poster_path": "https://theposterdb.com/api/assets/434478/view",
    "backdrop_path": "https://theposterdb.com/api/assets/434478/view",
    "overview": "A young Tunisian woman seeks justice after being raped by police officers.",
    "release_date": "2017-10-18",
    "vote_average": 7.1,
    "runtime": 100,
    "genre_ids": [
      18,
      53
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 121,
    "title": "Becoming Led Zeppelin",
    "poster_path": "https://theposterdb.com/api/assets/592111/view",
    "backdrop_path": "https://theposterdb.com/api/assets/592111/view",
    "overview": "A documentary about the early years of the legendary rock band, Led Zeppelin.",
    "release_date": "2025-01-01",
    "vote_average": 7.8,
    "runtime": 137,
    "genre_ids": [
      99,
      10402
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      },
      {
        "id": 10402,
        "name": "Música"
      }
    ],
    "tagline": "The birth of gods.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 122,
    "title": "Bedevilled",
    "poster_path": "https://theposterdb.com/api/assets/590747/view",
    "backdrop_path": "https://theposterdb.com/api/assets/590747/view",
    "overview": "A woman living on a remote island is subjected to horrific abuse, leading to a brutal revenge.",
    "release_date": "2010-09-02",
    "vote_average": 7.3,
    "runtime": 115,
    "genre_ids": [
      27,
      53,
      18
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 123,
    "title": "Beetlejuice Beetlejuice",
    "poster_path": "https://theposterdb.com/api/assets/509024/view",
    "backdrop_path": "https://theposterdb.com/api/assets/509024/view",
    "overview": "The long-awaited sequel to the 1988 classic, with the ghost with the most returning to wreak havoc.",
    "release_date": "2024-09-04",
    "vote_average": 7.2,
    "runtime": 105,
    "genre_ids": [
      35,
      14,
      27
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 14,
        "name": "Fantasia"
      },
      {
        "id": 27,
        "name": "Terror"
      }
    ],
    "tagline": "The juice is loose.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 124,
    "title": "Before We Vanish",
    "poster_path": "https://theposterdb.com/api/assets/634008/view",
    "backdrop_path": "https://theposterdb.com/api/assets/634008/view",
    "overview": "Three aliens come to Earth to prepare for a mass invasion.",
    "release_date": "2017-09-09",
    "vote_average": 6.4,
    "runtime": 129,
    "genre_ids": [
      878,
      18,
      53
    ],
    "genres": [
      {
        "id": 878,
        "name": "Ficção científica"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 125,
    "title": "Best Wishes to All",
    "poster_path": "https://theposterdb.com/api/assets/633277/view",
    "backdrop_path": "https://theposterdb.com/api/assets/633277/view",
    "overview": "A young woman visits her grandparents in the countryside and uncovers a dark family secret.",
    "release_date": "2023-01-27",
    "vote_average": 6,
    "runtime": 84,
    "genre_ids": [
      27,
      9648
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 9648,
        "name": "Mistério"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 126,
    "title": "Better Man",
    "poster_path": "https://a.ltrbxd.com/resized/alternative-backdrop/7/1/7/4/7/1/tmdb/hCR5Rh2LBILxakZvEzTUzSCPRrb-1200-1200-675-675-crop-000000.jpg?v=a1476c7ca5",
    "backdrop_path": "https://a.ltrbxd.com/resized/alternative-backdrop/7/1/7/4/7/1/tmdb/hCR5Rh2LBILxakZvEzTUzSCPRrb-1200-1200-675-675-crop-000000.jpg?v=a1476c7ca5",
    "overview": "A biopic about the life of British pop star Robbie Williams.",
    "release_date": "2024-12-25",
    "vote_average": 7.3,
    "runtime": 133,
    "genre_ids": [
      10402,
      18
    ],
    "genres": [
      {
        "id": 10402,
        "name": "Música"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "The story behind the entertainer.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 127,
    "title": "Between the Temples",
    "poster_path": "https://theposterdb.com/api/assets/527951/view",
    "backdrop_path": "https://theposterdb.com/api/assets/527951/view",
    "overview": "A cantor in a crisis of faith finds his world turned upside down when his elementary school music teacher re-enters his life as his new adult bat mitzvah student.",
    "release_date": "2024-01-19",
    "vote_average": 6.8,
    "runtime": 102,
    "genre_ids": [
      35,
      18
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 128,
    "title": "Beware of a Holy Whore",
    "poster_path": "https://theposterdb.com/api/assets/478698/view",
    "backdrop_path": "https://theposterdb.com/api/assets/478698/view",
    "overview": "A film crew descends into chaos while waiting for their director and funding.",
    "release_date": "1971-08-28",
    "vote_average": 7,
    "runtime": 103,
    "genre_ids": [
      18,
      35
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 35,
        "name": "Comédia"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 129,
    "title": "Beyond Outrage",
    "poster_path": "https://theposterdb.com/api/assets/46764/view",
    "backdrop_path": "https://theposterdb.com/api/assets/46764/view",
    "overview": "The sequel to Outrage, with more yakuza betrayals and violence.",
    "release_date": "2012-10-06",
    "vote_average": 6.9,
    "runtime": 112,
    "genre_ids": [
      28,
      80
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 130,
    "title": "Bicycle Thieves",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/xh/na/ai/0x/bicycle-thieves-1200-1200-675-675-crop-000000.jpg?v=7cd2a52c59",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/xh/na/ai/0x/bicycle-thieves-1200-1200-675-675-crop-000000.jpg?v=7cd2a52c59",
    "overview": "A poor father searches post-World War II Rome for his stolen bicycle, without which he will lose the job which was to be the salvation of his young family.",
    "release_date": "1948-11-24",
    "vote_average": 8.3,
    "runtime": 89,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 131,
    "title": "Big Wednesday",
    "poster_path": "https://theposterdb.com/api/assets/580165/view",
    "backdrop_path": "https://theposterdb.com/api/assets/580165/view",
    "overview": "A coming-of-age story about three young surfers in California during the 1960s and 70s.",
    "release_date": "1978-05-26",
    "vote_average": 7.1,
    "runtime": 120,
    "genre_ids": [
      18,
      28
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 28,
        "name": "Ação"
      }
    ],
    "tagline": "Their passion was surfing. Their story is a legend.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 132,
    "title": "Bird",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/z6/9n/lu/zz/nueVVebU9F78VwWLy5wxPubelDM-1200-1200-675-675-crop-000000.jpg?v=7c6271846d",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/z6/9n/lu/zz/nueVVebU9F78VwWLy5wxPubelDM-1200-1200-675-675-crop-000000.jpg?v=7c6271846d",
    "overview": "A young girl living in a squat in North Kent with her single father and brother, finds escape and connection through her imagination.",
    "release_date": "2024-05-16",
    "vote_average": 7.2,
    "runtime": 119,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 133,
    "title": "Birds of Passage",
    "poster_path": "https://theposterdb.com/api/assets/641850/view",
    "backdrop_path": "https://theposterdb.com/api/assets/641850/view",
    "overview": "The story of an indigenous Wayuu family in Colombia who get involved in the drug trade.",
    "release_date": "2018-05-09",
    "vote_average": 7.5,
    "runtime": 125,
    "genre_ids": [
      80,
      18
    ],
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 134,
    "title": "Bitter Money",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/3/4/6/4/9/6/346496-bitter-money-0-230-0-345-crop.jpg?v=16764646b9",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/3/4/6/4/9/6/346496-bitter-money-0-230-0-345-crop.jpg?v=16764646b9",
    "overview": "A documentary that follows a group of young migrant workers in China.",
    "release_date": "2016-09-04",
    "vote_average": 7,
    "runtime": 152,
    "genre_ids": [
      99
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 135,
    "title": "Bittersweet Rain",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Lee_Byung-hun_2025_Toronto_%28cropped%29.jpg/1280px-Lee_Byung-hun_2025_Toronto_%28cropped%29.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Lee_Byung-hun_2025_Toronto_%28cropped%29.jpg/1280px-Lee_Byung-hun_2025_Toronto_%28cropped%29.jpg",
    "overview": "A young man returns to his hometown and confronts his past.",
    "release_date": "2022-10-27",
    "vote_average": 6,
    "runtime": 90,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 136,
    "title": "Black Bag",
    "poster_path": "https://theposterdb.com/api/assets/575394/view",
    "backdrop_path": "https://theposterdb.com/api/assets/575394/view",
    "overview": "A spy thriller with a plot that is being kept under wraps.",
    "release_date": "2025-01-01",
    "vote_average": 7,
    "runtime": 115,
    "genre_ids": [
      53
    ],
    "genres": [
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 137,
    "title": "Black Box Diaries",
    "poster_path": "https://theposterdb.com/api/assets/564778/view",
    "backdrop_path": "https://theposterdb.com/api/assets/564778/view",
    "overview": "A documentary about a Japanese journalist who exposes a government cover-up.",
    "release_date": "2024-01-20",
    "vote_average": 7.5,
    "runtime": 104,
    "genre_ids": [
      99
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      }
    ],
    "tagline": "The truth will come out.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 138,
    "title": "Black Cat Mansion",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/6z/l3/7v/yk/162rFyCEZqMlPvnRmfKIbV7gqh6-1200-1200-675-675-crop-000000.jpg?v=1cb931444e",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/6z/l3/7v/yk/162rFyCEZqMlPvnRmfKIbV7gqh6-1200-1200-675-675-crop-000000.jpg?v=1cb931444e",
    "overview": "A classic Japanese ghost story about a haunted mansion and a vengeful cat spirit.",
    "release_date": "1958-09-07",
    "vote_average": 6.8,
    "runtime": 69,
    "genre_ids": [
      27,
      14
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 14,
        "name": "Fantasia"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 139,
    "title": "Black Girl",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/5r/1t/26/9g/blackgirl-1200-1200-675-675-crop-000000.jpg?v=252c6847a6",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/5r/1t/26/9g/blackgirl-1200-1200-675-675-crop-000000.jpg?v=252c6847a6",
    "overview": "A young Senegalese woman moves to France to work for a white couple and finds herself isolated and exploited.",
    "release_date": "1966-12-01",
    "vote_average": 7.5,
    "runtime": 65,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 140,
    "title": "Black Moon",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/0j/xl/0p/tu/black%20moon-1200-1200-675-675-crop-000000.jpg?v=2758b64289",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/0j/xl/0p/tu/black%20moon-1200-1200-675-675-crop-000000.jpg?v=2758b64289",
    "overview": "A surreal and dreamlike film about a young woman who finds herself in a strange country house during a civil war.",
    "release_date": "1975-09-24",
    "vote_average": 6.3,
    "runtime": 100,
    "genre_ids": [
      14,
      878
    ],
    "genres": [
      {
        "id": 14,
        "name": "Fantasia"
      },
      {
        "id": 878,
        "name": "Ficção científica"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 141,
    "title": "Black Narcissus",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/hy/8c/pd/5l/5vv11EhUCClBX6U9Tp7IMNEI79V-1200-1200-675-675-crop-000000.jpg?v=58b6805ad4",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/hy/8c/pd/5l/5vv11EhUCClBX6U9Tp7IMNEI79V-1200-1200-675-675-crop-000000.jpg?v=58b6805ad4",
    "overview": "A group of Anglican nuns open a school and hospital in a remote Himalayan palace, but the environment and isolation take their toll.",
    "release_date": "1947-05-27",
    "vote_average": 7.7,
    "runtime": 100,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "In the heart of the Himalayas, a forbidden passion.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 142,
    "title": "Black Rain",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/y4/w0/dn/kw/black%20rain-1200-1200-675-675-crop-000000.jpg?v=70ca18411e",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/y4/w0/dn/kw/black%20rain-1200-1200-675-675-crop-000000.jpg?v=70ca18411e",
    "overview": "A powerful and moving film about the aftermath of the atomic bombing of Hiroshima.",
    "release_date": "1989-05-13",
    "vote_average": 7.5,
    "runtime": 123,
    "genre_ids": [
      18,
      36
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 36,
        "name": "História"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 143,
    "title": "Blade of Fury",
    "poster_path": "https://theposterdb.com/api/assets/546327/view",
    "backdrop_path": "https://theposterdb.com/api/assets/546327/view",
    "overview": "A wuxia film about a swordsman who seeks revenge for the murder of his family.",
    "release_date": "2024-01-01",
    "vote_average": 6,
    "runtime": 90,
    "genre_ids": [
      28,
      12
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 12,
        "name": "Aventura"
      }
    ],
    "tagline": "Revenge is a dish best served with a sharp blade.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 144,
    "title": "Blanche",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/ku/no/uu/6e/blanche-1200-1200-675-675-crop-000000.jpg?v=4e9e3e70d9",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/ku/no/uu/6e/blanche-1200-1200-675-675-crop-000000.jpg?v=4e9e3e70d9",
    "overview": "A medieval tragedy about a young woman who is married to an old baron.",
    "release_date": "1971-10-24",
    "vote_average": 7,
    "runtime": 94,
    "genre_ids": [
      18,
      36
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 36,
        "name": "História"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 145,
    "title": "Blink Twice",
    "poster_path": "https://theposterdb.com/api/assets/505646/view",
    "backdrop_path": "https://theposterdb.com/api/assets/505646/view",
    "overview": "A tech billionaire invites a cocktail waitress to his private island, but paradise turns into a nightmare.",
    "release_date": "2024-08-21",
    "vote_average": 6.8,
    "runtime": 125,
    "genre_ids": [
      53,
      9648
    ],
    "genres": [
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 9648,
        "name": "Mistério"
      }
    ],
    "tagline": "What happens on the island, stays on the island.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 146,
    "title": "Blitz",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/sb/23/7k/eo/blitz-1200-1200-675-675-crop-000000.jpg?v=ffce0e81fb",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/sb/23/7k/eo/blitz-1200-1200-675-675-crop-000000.jpg?v=ffce0e81fb",
    "overview": "A historical drama about the Blitz in London during World War II.",
    "release_date": "2024-11-01",
    "vote_average": 7.2,
    "runtime": 122,
    "genre_ids": [
      18,
      36,
      10752
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 36,
        "name": "História"
      },
      {
        "id": 10752,
        "name": "Guerra"
      }
    ],
    "tagline": "London is burning.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 147,
    "title": "Blood for Dracula",
    "poster_path": "https://theposterdb.com/api/assets/93106/view",
    "backdrop_path": "https://theposterdb.com/api/assets/93106/view",
    "overview": "A sickly Dracula travels to Italy in search of virgin blood.",
    "release_date": "1974-03-01",
    "vote_average": 6.3,
    "runtime": 103,
    "genre_ids": [
      27
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 148,
    "title": "Blood Simple",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/et/ux/ky/f0/blood-simple-1200-1200-675-675-crop-000000.jpg?v=5f69c8ea7e",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/et/ux/ky/f0/blood-simple-1200-1200-675-675-crop-000000.jpg?v=5f69c8ea7e",
    "overview": "A Texas bar owner hires a private investigator to kill his cheating wife and her lover, but the plan goes horribly wrong.",
    "release_date": "1984-09-07",
    "vote_average": 7.5,
    "runtime": 99,
    "genre_ids": [
      80,
      53
    ],
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "The first film by the Coen Brothers.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 149,
    "title": "Bloodline",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/5w/py/8c/o8/bloodline-1200-1200-675-675-crop-000000.jpg?v=07b78143c4",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/5w/py/8c/o8/bloodline-1200-1200-675-675-crop-000000.jpg?v=07b78143c4",
    "overview": "A woman inherits a pharmaceutical company and uncovers a deadly conspiracy.",
    "release_date": "1979-06-29",
    "vote_average": 5.3,
    "runtime": 116,
    "genre_ids": [
      53,
      9648
    ],
    "genres": [
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 9648,
        "name": "Mistério"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 150,
    "title": "Blue Moon",
    "poster_path": "https://theposterdb.com/api/assets/666769/view",
    "backdrop_path": "https://theposterdb.com/api/assets/666769/view",
    "overview": "A young man gets caught up in the world of gay prostitution in Taipei.",
    "release_date": "1997-01-01",
    "vote_average": 6,
    "runtime": 104,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 151,
    "title": "Blue Spring",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/cw/3w/el/8o/blue-spring-1200-1200-675-675-crop-000000.jpg?v=0c00462acb",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/cw/3w/el/8o/blue-spring-1200-1200-675-675-crop-000000.jpg?v=0c00462acb",
    "overview": "A group of high school students in a dead-end town try to find their place in the world.",
    "release_date": "2001-09-06",
    "vote_average": 7.2,
    "runtime": 83,
    "genre_ids": [
      28,
      18
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 152,
    "title": "Body Snatchers",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/wj/5l/ew/2t/bz8N9J6Uhj0cgwKSib0XMoULVC5-1200-1200-675-675-crop-000000.jpg?v=c0c52eda6e",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/wj/5l/ew/2t/bz8N9J6Uhj0cgwKSib0XMoULVC5-1200-1200-675-675-crop-000000.jpg?v=c0c52eda6e",
    "overview": "A teenage girl discovers that the people in her military base town are being replaced by alien duplicates.",
    "release_date": "1993-05-15",
    "vote_average": 6.1,
    "runtime": 87,
    "genre_ids": [
      27,
      878,
      9648
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 878,
        "name": "Ficção científica"
      },
      {
        "id": 9648,
        "name": "Mistério"
      }
    ],
    "tagline": "They get you when you sleep.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 153,
    "title": "Boiling Point",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/n3/nc/ar/yt/boiling-point-1200-1200-675-675-crop-000000.jpg?v=0c945577af",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/n3/nc/ar/yt/boiling-point-1200-1200-675-675-crop-000000.jpg?v=0c945577af",
    "overview": "A young gas station attendant gets in trouble with the yakuza.",
    "release_date": "1990-09-15",
    "vote_average": 6.9,
    "runtime": 96,
    "genre_ids": [
      28,
      35,
      80
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 154,
    "title": "Borderlands",
    "poster_path": "https://theposterdb.com/api/assets/461848/view",
    "backdrop_path": "https://theposterdb.com/api/assets/461848/view",
    "overview": "A live-action adaptation of the popular video game series.",
    "release_date": "2024-08-07",
    "vote_average": 6.9,
    "runtime": 101,
    "genre_ids": [
      28,
      878,
      35,
      12
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 878,
        "name": "Ficção científica"
      },
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 12,
        "name": "Aventura"
      }
    ],
    "tagline": "Chaos loves company.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 155,
    "title": "Boris Godounov",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/bk/he/vf/o7/boris-1200-1200-675-675-crop-000000.jpg?v=105ac00d9f",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/bk/he/vf/o7/boris-1200-1200-675-675-crop-000000.jpg?v=105ac00d9f",
    "overview": "An adaptation of Modest Mussorgsky's opera about the 17th-century Russian czar.",
    "release_date": "1989-12-20",
    "vote_average": 6.5,
    "runtime": 115,
    "genre_ids": [
      18,
      10402,
      36
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10402,
        "name": "Música"
      },
      {
        "id": 36,
        "name": "História"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 156,
    "title": "Boyz n the Hood",
    "poster_path": "https://theposterdb.com/api/assets/46700/view",
    "backdrop_path": "https://theposterdb.com/api/assets/46700/view",
    "overview": "Three friends grow up in a South Central Los Angeles neighborhood, where they are surrounded by violence and poverty.",
    "release_date": "1991-07-12",
    "vote_average": 7.7,
    "runtime": 112,
    "genre_ids": [
      18,
      80
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "tagline": "Once upon a time in South Central L.A.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 157,
    "title": "Bramayugam",
    "poster_path": "https://theposterdb.com/api/assets/637524/view",
    "backdrop_path": "https://theposterdb.com/api/assets/637524/view",
    "overview": "A folk horror film set in ancient Kerala, where a man discovers a dark secret in a mysterious mansion.",
    "release_date": "2024-02-15",
    "vote_average": 7.6,
    "runtime": 139,
    "genre_ids": [
      27,
      9648
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 9648,
        "name": "Mistério"
      }
    ],
    "tagline": "The age of madness.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 158,
    "title": "Branded to Kill",
    "poster_path": "https://theposterdb.com/api/assets/93110/view",
    "backdrop_path": "https://theposterdb.com/api/assets/93110/view",
    "overview": "A yakuza hitman botches a job and becomes a target himself.",
    "release_date": "1967-06-15",
    "vote_average": 7.2,
    "runtime": 91,
    "genre_ids": [
      28,
      80,
      53
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 159,
    "title": "Brawl in Cell Block 99",
    "poster_path": "https://theposterdb.com/api/assets/31453/view",
    "backdrop_path": "https://theposterdb.com/api/assets/31453/view",
    "overview": "A former boxer turned drug runner finds himself in a prison where he must fight to survive.",
    "release_date": "2017-09-02",
    "vote_average": 7,
    "runtime": 132,
    "genre_ids": [
      28,
      80,
      53
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "The ultimate showdown.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 160,
    "title": "Brazil",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/2u/3s/a4/fh/brazil-1200-1200-675-675-crop-000000.jpg?v=842009a058",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/2u/3s/a4/fh/brazil-1200-1200-675-675-crop-000000.jpg?v=842009a058",
    "overview": "A bureaucrat in a dystopic society becomes an enemy of the state as he pursues the woman of his dreams.",
    "release_date": "1985-02-20",
    "vote_average": 7.8,
    "runtime": 132,
    "genre_ids": [
      878,
      35
    ],
    "genres": [
      {
        "id": 878,
        "name": "Ficção científica"
      },
      {
        "id": 35,
        "name": "Comédia"
      }
    ],
    "tagline": "It's only a state of mind.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 161,
    "title": "Brazilian Holocaust",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Selection_on_the_ramp_at_Auschwitz-Birkenau%2C_1944_%28Auschwitz_Album%29_1b.jpg/1280px-Selection_on_the_ramp_at_Auschwitz-Birkenau%2C_1944_%28Auschwitz_Album%29_1b.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Selection_on_the_ramp_at_Auschwitz-Birkenau%2C_1944_%28Auschwitz_Album%29_1b.jpg/1280px-Selection_on_the_ramp_at_Auschwitz-Birkenau%2C_1944_%28Auschwitz_Album%29_1b.jpg",
    "overview": "A documentary about the Barbacena mental hospital, where thousands of patients were subjected to horrific abuse and neglect.",
    "release_date": "2016-06-22",
    "vote_average": 8,
    "runtime": 80,
    "genre_ids": [
      99
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 162,
    "title": "Breaking the Waves",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/fo/ci/x3/57/breaking%20the%20waves-1200-1200-675-675-crop-000000.jpg?v=6cd2a8bfb6",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/fo/ci/x3/57/breaking%20the%20waves-1200-1200-675-675-crop-000000.jpg?v=6cd2a8bfb6",
    "overview": "A deeply religious woman in a small Scottish town makes a series of sacrifices for her paralyzed husband.",
    "release_date": "1996-07-05",
    "vote_average": 7.7,
    "runtime": 159,
    "genre_ids": [
      18,
      10749
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "Love is a mighty power.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 163,
    "title": "Breathless",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/nw/yi/ym/44/c5bvwhF6J8z0OVXhUNs19bXNezl-1200-1200-675-675-crop-000000.jpg?v=fe1d752466",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/nw/yi/ym/44/c5bvwhF6J8z0OVXhUNs19bXNezl-1200-1200-675-675-crop-000000.jpg?v=fe1d752466",
    "overview": "A small-time crook on the run from the police hides out with his American girlfriend in Paris.",
    "release_date": "1960-03-16",
    "vote_average": 7.8,
    "runtime": 90,
    "genre_ids": [
      18,
      80
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "tagline": "The film that changed cinema.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 164,
    "title": "Bright Future",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/1/11/Cameron_Bright.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/1/11/Cameron_Bright.jpg",
    "overview": "Two young men working in a towel factory dream of a better life.",
    "release_date": "2002-09-07",
    "vote_average": 6.6,
    "runtime": 92,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 165,
    "title": "Brighton Rock",
    "poster_path": "https://theposterdb.com/api/assets/207188/view",
    "backdrop_path": "https://theposterdb.com/api/assets/207188/view",
    "overview": "A small-time gangster in Brighton tries to cover up a murder.",
    "release_date": "1948-01-08",
    "vote_average": 7,
    "runtime": 92,
    "genre_ids": [
      80,
      53
    ],
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 166,
    "title": "Bring Me the Head of Alfredo Garcia",
    "poster_path": "https://theposterdb.com/api/assets/207189/view",
    "backdrop_path": "https://theposterdb.com/api/assets/207189/view",
    "overview": "A down-on-his-luck piano player in Mexico gets involved in a violent quest for a million-dollar bounty.",
    "release_date": "1974-08-14",
    "vote_average": 7.2,
    "runtime": 112,
    "genre_ids": [
      28,
      80,
      53
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "He was a man who lived by his own rules.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 167,
    "title": "Bring Them Down",
    "poster_path": "https://theposterdb.com/api/assets/589886/view",
    "backdrop_path": "https://theposterdb.com/api/assets/589886/view",
    "overview": "A sheepherder gets caught up in a violent conflict with a neighboring farm.",
    "release_date": "2024-09-08",
    "vote_average": 6.7,
    "runtime": 102,
    "genre_ids": [
      53,
      18
    ],
    "genres": [
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 168,
    "title": "Broken Rage",
    "poster_path": "https://theposterdb.com/api/assets/581283/view",
    "backdrop_path": "https://theposterdb.com/api/assets/581283/view",
    "overview": "An action thriller with a plot that is being kept under wraps.",
    "release_date": "2024-01-01",
    "vote_average": 6.2,
    "runtime": 108,
    "genre_ids": [
      28,
      53
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 169,
    "title": "Brother",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/2/7/0/8/5/127085-brother-2000-0-230-0-345-crop.jpg?v=582e9d9ec3",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/1/2/7/0/8/5/127085-brother-2000-0-230-0-345-crop.jpg?v=582e9d9ec3",
    "overview": "A Japanese yakuza exiled to Los Angeles builds a new criminal empire.",
    "release_date": "2000-09-07",
    "vote_average": 7.1,
    "runtime": 114,
    "genre_ids": [
      28,
      80,
      53
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 170,
    "title": "Bubble Bath",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/6q/rt/qv/i1/2X6VgKP0bO07JB4YVg9KPbgBi5h-1200-1200-675-675-crop-000000.jpg?v=8a2fe42153",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/6q/rt/qv/i1/2X6VgKP0bO07JB4YVg9KPbgBi5h-1200-1200-675-675-crop-000000.jpg?v=8a2fe42153",
    "overview": "An animated Hungarian musical comedy.",
    "release_date": "1979-11-29",
    "vote_average": 6.8,
    "runtime": 77,
    "genre_ids": [
      16,
      35,
      10402
    ],
    "genres": [
      {
        "id": 16,
        "name": "Animação"
      },
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 10402,
        "name": "Música"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 171,
    "title": "Bullet Ballet",
    "poster_path": "https://theposterdb.com/api/assets/558512/view",
    "backdrop_path": "https://theposterdb.com/api/assets/558512/view",
    "overview": "A man's life spirals out of control after his girlfriend commits suicide.",
    "release_date": "1998-09-05",
    "vote_average": 6.7,
    "runtime": 87,
    "genre_ids": [
      18,
      53
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 172,
    "title": "Bumpkin Soup",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Kiyoshi_Kurosawa_at_the_2024_Toronto_International_Film_Festival.jpg/1280px-Kiyoshi_Kurosawa_at_the_2024_Toronto_International_Film_Festival.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Kiyoshi_Kurosawa_at_the_2024_Toronto_International_Film_Festival.jpg/1280px-Kiyoshi_Kurosawa_at_the_2024_Toronto_International_Film_Festival.jpg",
    "overview": "A surreal musical comedy from Japan.",
    "release_date": "1985-10-10",
    "vote_average": 6,
    "runtime": 90,
    "genre_ids": [
      35,
      10402
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 10402,
        "name": "Música"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 173,
    "title": "Buoyancy",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/qc/wf/78/nu/buoyancy-1200-1200-675-675-crop-000000.jpg?v=e58d0d3fe3",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/qc/wf/78/nu/buoyancy-1200-1200-675-675-crop-000000.jpg?v=e58d0d3fe3",
    "overview": "A 14-year-old Cambodian boy is sold into slavery on a Thai fishing trawler.",
    "release_date": "2019-02-08",
    "vote_average": 7.2,
    "runtime": 93,
    "genre_ids": [
      18,
      53
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 174,
    "title": "Burning",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/92/vq/bo/xe/burning-2018-1200-1200-675-675-crop-000000.jpg?v=1af4ed84b4",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/92/vq/bo/xe/burning-2018-1200-1200-675-675-crop-000000.jpg?v=1af4ed84b4",
    "overview": "A young man's life is complicated by the appearance of a mysterious and wealthy young man.",
    "release_date": "2018-05-17",
    "vote_average": 7.4,
    "runtime": 148,
    "genre_ids": [
      18,
      53,
      9648
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 9648,
        "name": "Mistério"
      }
    ],
    "tagline": "The truth is what you believe.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 175,
    "title": "By Brakhage: An Anthology, Volumes One and Two (2004): • vol. 2b:",
    "poster_path": "https://picsum.photos/seed/175/500/750",
    "backdrop_path": "https://picsum.photos/seed/bp175/1280/720",
    "overview": "A collection of short films by the legendary avant-garde filmmaker, Stan Brakhage.",
    "release_date": "2004-01-01",
    "vote_average": 7,
    "runtime": 240,
    "genre_ids": [
      99
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 176,
    "title": "By Brakhage: An Anthology, Volumes One and Two (2004): • vol. 1 e 2a:",
    "poster_path": "https://picsum.photos/seed/176/500/750",
    "backdrop_path": "https://picsum.photos/seed/bp176/1280/720",
    "overview": "A collection of short films by the legendary avant-garde filmmaker, Stan Brakhage.",
    "release_date": "2004-01-01",
    "vote_average": 7,
    "runtime": 240,
    "genre_ids": [
      99
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 177,
    "title": "By the Stream",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/xt/kb/h6/4q/tree-1200-1200-675-675-crop-000000.jpg?v=8bd766ee23",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/xt/kb/h6/4q/tree-1200-1200-675-675-crop-000000.jpg?v=8bd766ee23",
    "overview": "A quiet and contemplative film about a woman living by a stream.",
    "release_date": "2024-02-21",
    "vote_average": 6,
    "runtime": 67,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 178,
    "title": "C.R.A.Z.Y.",
    "poster_path": "https://theposterdb.com/api/assets/415290/view",
    "backdrop_path": "https://theposterdb.com/api/assets/415290/view",
    "overview": "A young man in 1970s Quebec struggles with his sexuality and his relationship with his conservative father.",
    "release_date": "2005-05-27",
    "vote_average": 7.8,
    "runtime": 127,
    "genre_ids": [
      18,
      35
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 35,
        "name": "Comédia"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 179,
    "title": "Caché",
    "poster_path": "https://theposterdb.com/api/assets/296480/view",
    "backdrop_path": "https://theposterdb.com/api/assets/296480/view",
    "overview": "A Parisian couple is terrorized by a series of mysterious videotapes that show them being secretly watched.",
    "release_date": "2005-10-05",
    "vote_average": 7.2,
    "runtime": 117,
    "genre_ids": [
      18,
      53,
      9648
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 9648,
        "name": "Mistério"
      }
    ],
    "tagline": "What you don't know can hurt you.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 180,
    "title": "Caddo Lake",
    "poster_path": "https://theposterdb.com/api/assets/532698/view",
    "backdrop_path": "https://theposterdb.com/api/assets/532698/view",
    "overview": "When a young girl goes missing in a small town, her family must confront a dark secret.",
    "release_date": "2024-01-01",
    "vote_average": 6.5,
    "runtime": 101,
    "genre_ids": [
      53,
      9648
    ],
    "genres": [
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 9648,
        "name": "Mistério"
      }
    ],
    "tagline": "Some secrets are better left buried.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 181,
    "title": "Cairo Station",
    "poster_path": "https://theposterdb.com/api/assets/605137/view",
    "backdrop_path": "https://theposterdb.com/api/assets/605137/view",
    "overview": "A crippled newspaper vendor in Cairo becomes obsessed with a beautiful young woman.",
    "release_date": "1958-09-01",
    "vote_average": 7.5,
    "runtime": 77,
    "genre_ids": [
      18,
      80
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 182,
    "title": "California Straight Ahead",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/5/8/1/2/2/158122-california-straight-ahead-1937-0-230-0-345-crop.jpg?v=a5d82d8937",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/1/5/8/1/2/2/158122-california-straight-ahead-1937-0-230-0-345-crop.jpg?v=a5d82d8937",
    "overview": "A cross-country race between a truck driver and a train engineer.",
    "release_date": "1937-04-16",
    "vote_average": 6,
    "runtime": 67,
    "genre_ids": [
      12,
      28
    ],
    "genres": [
      {
        "id": 12,
        "name": "Aventura"
      },
      {
        "id": 28,
        "name": "Ação"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 183,
    "title": "Caligula: The Ultimate Cut",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/4i/ko/vm/r5/Caligula_MalcolmMcDowell_HelenMirren_2_Courtesy_Of_Drafthouse_Films-1200-1200-675-675-crop-000000.jpg?v=2e3e92c8b1",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/4i/ko/vm/r5/Caligula_MalcolmMcDowell_HelenMirren_2_Courtesy_Of_Drafthouse_Films-1200-1200-675-675-crop-000000.jpg?v=2e3e92c8b1",
    "overview": "A new, re-edited version of the infamous 1979 film about the depraved Roman emperor.",
    "release_date": "2023-05-19",
    "vote_average": 6.5,
    "runtime": 178,
    "genre_ids": [
      18,
      36
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 36,
        "name": "História"
      }
    ],
    "tagline": "The most controversial film of all time, now even more so.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 184,
    "title": "Calvaire",
    "poster_path": "https://theposterdb.com/api/assets/589093/view",
    "backdrop_path": "https://theposterdb.com/api/assets/589093/view",
    "overview": "A traveling singer breaks down in a remote village and is taken in by a lonely innkeeper.",
    "release_date": "2004-05-18",
    "vote_average": 6.4,
    "runtime": 90,
    "genre_ids": [
      27,
      18
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 185,
    "title": "Cannibal",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/6/8/0/2/16802-cannibal-0-230-0-345-crop.jpg?v=6d56ab4ad2",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/1/6/8/0/2/16802-cannibal-0-230-0-345-crop.jpg?v=6d56ab4ad2",
    "overview": "A German man advertises for a willing victim to be killed and eaten.",
    "release_date": "2006-03-30",
    "vote_average": 5.5,
    "runtime": 90,
    "genre_ids": [
      27,
      18,
      53
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "Based on a true story.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 186,
    "title": "Captain Volkonogov Escaped",
    "poster_path": "https://theposterdb.com/api/assets/406436/view",
    "backdrop_path": "https://theposterdb.com/api/assets/406436/view",
    "overview": "A captain in the Soviet secret police tries to atone for his sins.",
    "release_date": "2021-09-08",
    "vote_average": 7.2,
    "runtime": 125,
    "genre_ids": [
      18,
      53
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 187,
    "title": "Carlito's Way",
    "poster_path": "https://theposterdb.com/api/assets/192355/view",
    "backdrop_path": "https://theposterdb.com/api/assets/192355/view",
    "overview": "A former drug lord is released from prison and tries to go straight, but he is pulled back into the criminal underworld.",
    "release_date": "1993-11-10",
    "vote_average": 7.8,
    "runtime": 144,
    "genre_ids": [
      80,
      18,
      53
    ],
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "He's got a good future, if he can live past next week.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 188,
    "title": "Carlito's Way: Rise to Power",
    "poster_path": "https://theposterdb.com/api/assets/234907/view",
    "backdrop_path": "https://theposterdb.com/api/assets/234907/view",
    "overview": "A prequel to Carlito's Way, showing how he became a powerful drug lord.",
    "release_date": "2005-09-13",
    "vote_average": 6,
    "runtime": 94,
    "genre_ids": [
      28,
      80,
      18
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 189,
    "title": "Carne",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/ia/af/2x/6p/carne-1200-1200-675-675-crop-000000.jpg?v=0392f444dd",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/ia/af/2x/6p/carne-1200-1200-675-675-crop-000000.jpg?v=0392f444dd",
    "overview": "A shocking and controversial short film about a butcher who takes revenge on the man who raped his daughter.",
    "release_date": "1991-05-18",
    "vote_average": 6.9,
    "runtime": 40,
    "genre_ids": [
      18,
      80
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 190,
    "title": "Cassandra's Dream",
    "poster_path": "https://theposterdb.com/api/assets/38603/view",
    "backdrop_path": "https://theposterdb.com/api/assets/38603/view",
    "overview": "Two brothers in London get into financial trouble and turn to crime.",
    "release_date": "2007-06-18",
    "vote_average": 6.5,
    "runtime": 108,
    "genre_ids": [
      80,
      18,
      53,
      10749
    ],
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 191,
    "title": "Castaway on the Moon",
    "poster_path": "https://theposterdb.com/api/assets/640395/view",
    "backdrop_path": "https://theposterdb.com/api/assets/640395/view",
    "overview": "A man who tries to commit suicide by jumping off a bridge finds himself stranded on a small island in the middle of the Han River.",
    "release_date": "2009-05-14",
    "vote_average": 7.9,
    "runtime": 116,
    "genre_ids": [
      18,
      35,
      10749
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 192,
    "title": "Cat Chaser",
    "poster_path": "https://theposterdb.com/api/assets/294902/view",
    "backdrop_path": "https://theposterdb.com/api/assets/294902/view",
    "overview": "A former American paratrooper living in Miami gets involved with the wife of a Dominican general.",
    "release_date": "1989-12-08",
    "vote_average": 5.4,
    "runtime": 88,
    "genre_ids": [
      53,
      10749
    ],
    "genres": [
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 193,
    "title": "Caught by the Tides",
    "poster_path": "https://theposterdb.com/api/assets/632267/view",
    "backdrop_path": "https://theposterdb.com/api/assets/632267/view",
    "overview": "A woman searches for her lost love across China over two decades.",
    "release_date": "2024-05-18",
    "vote_average": 7,
    "runtime": 111,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 194,
    "title": "Cemetery of Splendor",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/9o/7a/zj/kv/cemetery-of-splendour-1200-1200-675-675-crop-000000.jpg?v=389f8f1523",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/9o/7a/zj/kv/cemetery-of-splendour-1200-1200-675-675-crop-000000.jpg?v=389f8f1523",
    "overview": "A lonely housewife volunteers at a clinic for soldiers with a mysterious sleeping sickness.",
    "release_date": "2015-05-18",
    "vote_average": 6.6,
    "runtime": 122,
    "genre_ids": [
      18,
      14
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 14,
        "name": "Fantasia"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 195,
    "title": "Censor",
    "poster_path": "https://theposterdb.com/api/assets/153946/view",
    "backdrop_path": "https://theposterdb.com/api/assets/153946/view",
    "overview": "A film censor in 1980s Britain becomes obsessed with a horror film that reminds her of her sister's disappearance.",
    "release_date": "2021-01-28",
    "vote_average": 6.4,
    "runtime": 84,
    "genre_ids": [
      27,
      9648
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 9648,
        "name": "Mistério"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 196,
    "title": "Centaur",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/0/2/9/9/1/0/1029910-centaur-2023-0-230-0-345-crop.jpg?v=fe28759575",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/1/0/2/9/9/1/0/1029910-centaur-2023-0-230-0-345-crop.jpg?v=fe28759575",
    "overview": "A taxi driver by day becomes a horse thief by night.",
    "release_date": "2023-01-01",
    "vote_average": 6,
    "runtime": 90,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 197,
    "title": "Charisma",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/6s/be/sq/c9/f6QVCrfvdov6UCmtG2KRm6QttjC-1200-1200-675-675-crop-000000.jpg?v=4461fe1b47",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/6s/be/sq/c9/f6QVCrfvdov6UCmtG2KRm6QttjC-1200-1200-675-675-crop-000000.jpg?v=4461fe1b47",
    "overview": "A detective is sent to a remote forest to investigate a mysterious tree.",
    "release_date": "1999-05-15",
    "vote_average": 6.6,
    "runtime": 104,
    "genre_ids": [
      18,
      9648
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 9648,
        "name": "Mistério"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 198,
    "title": "Cheeky",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/gd/r2/uk/xo/cheeky-1200-1200-675-675-crop-000000.jpg?v=7eea410973",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/gd/r2/uk/xo/cheeky-1200-1200-675-675-crop-000000.jpg?v=7eea410973",
    "overview": "A young woman explores her sexuality in a series of erotic encounters.",
    "release_date": "2000-11-17",
    "vote_average": 5,
    "runtime": 90,
    "genre_ids": [
      10749,
      18
    ],
    "genres": [
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 199,
    "title": "Children of Paradise",
    "poster_path": "https://theposterdb.com/api/assets/93645/view",
    "backdrop_path": "https://theposterdb.com/api/assets/93645/view",
    "overview": "A sweeping romance set in the theatrical world of 19th-century Paris.",
    "release_date": "1945-03-09",
    "vote_average": 8.1,
    "runtime": 190,
    "genre_ids": [
      18,
      10749
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 200,
    "title": "Chile: Obstinate Memory",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/2/4/2/0/1/124201-chile-obstinate-memory-0-230-0-345-crop.jpg?v=113fe3cbea",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/1/2/4/2/0/1/124201-chile-obstinate-memory-0-230-0-345-crop.jpg?v=113fe3cbea",
    "overview": "A documentary that revisits the 1973 Chilean coup d'état.",
    "release_date": "1997-09-08",
    "vote_average": 7.5,
    "runtime": 58,
    "genre_ids": [
      99
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 201,
    "title": "Chime",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/to/5k/p1/am/chime-1200-1200-675-675-crop-000000.jpg?v=55041b169a",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/to/5k/p1/am/chime-1200-1200-675-675-crop-000000.jpg?v=55041b169a",
    "overview": "A short film by Kiyoshi Kurosawa.",
    "release_date": "2024-01-01",
    "vote_average": 6.2,
    "runtime": 45,
    "genre_ids": [
      27,
      9648
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 9648,
        "name": "Mistério"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 202,
    "title": "China Girl",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/hl/jn/hz/nv/china%20girl-1200-1200-675-675-crop-000000.jpg?v=204191f940",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/hl/jn/hz/nv/china%20girl-1200-1200-675-675-crop-000000.jpg?v=204191f940",
    "overview": "A modern-day Romeo and Juliet story set between Little Italy and Chinatown in New York City.",
    "release_date": "1987-09-25",
    "vote_average": 6.1,
    "runtime": 88,
    "genre_ids": [
      28,
      80,
      10749
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 203,
    "title": "Cidade; Campo",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/d7/tj/yc/av/CidadeCampo2024a-1200-1200-675-675-crop-000000.jpg?v=b5e3506082",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/d7/tj/yc/av/CidadeCampo2024a-1200-1200-675-675-crop-000000.jpg?v=b5e3506082",
    "overview": "A story of two families, one urban and one rural, and their connection to the land.",
    "release_date": "2024-02-18",
    "vote_average": 6.5,
    "runtime": 124,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 204,
    "title": "Cinema Before 1300",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/0/6/6/6/1/6/1066616-cinema-before-1300-0-230-0-345-crop.jpg?v=ad1670f7e6",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/1/0/6/6/6/1/6/1066616-cinema-before-1300-0-230-0-345-crop.jpg?v=ad1670f7e6",
    "overview": "A documentary exploring the origins of cinema.",
    "release_date": "2023-01-01",
    "vote_average": 7,
    "runtime": 90,
    "genre_ids": [
      99
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 205,
    "title": "Cinema Paradiso",
    "poster_path": "https://theposterdb.com/api/assets/150370/view",
    "backdrop_path": "https://theposterdb.com/api/assets/150370/view",
    "overview": "A filmmaker recalls his childhood and the local cinema where he fell in love with movies.",
    "release_date": "1988-11-17",
    "vote_average": 8.5,
    "runtime": 155,
    "genre_ids": [
      18,
      10749
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "A celebration of youth, friendship, and the everlasting magic of the movies.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 206,
    "title": "Citizen Kane",
    "poster_path": "https://theposterdb.com/api/assets/11991/view",
    "backdrop_path": "https://theposterdb.com/api/assets/11991/view",
    "overview": "Following the death of a publishing tycoon, reporters scramble to uncover the meaning of his final utterance.",
    "release_date": "1941-09-05",
    "vote_average": 8,
    "runtime": 119,
    "genre_ids": [
      18,
      9648
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 9648,
        "name": "Mistério"
      }
    ],
    "tagline": "It's terrific!",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 207,
    "title": "Cléo from 5 to 7",
    "poster_path": "https://theposterdb.com/api/assets/15757/view",
    "backdrop_path": "https://theposterdb.com/api/assets/15757/view",
    "overview": "A young singer wanders through Paris for two hours while waiting for the results of a medical test.",
    "release_date": "1962-04-11",
    "vote_average": 7.8,
    "runtime": 90,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 208,
    "title": "Climax",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/8y/87/0u/p7/climax-2018-1200-1200-675-675-crop-000000.jpg?v=57079f65f3",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/8y/87/0u/p7/climax-2018-1200-1200-675-675-crop-000000.jpg?v=57079f65f3",
    "overview": "A group of dancers descends into a hallucinatory nightmare after their drinks are spiked with LSD.",
    "release_date": "2018-09-19",
    "vote_average": 7.1,
    "runtime": 97,
    "genre_ids": [
      18,
      27,
      10402
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 10402,
        "name": "Música"
      }
    ],
    "tagline": "Birth and death are extraordinary experiences. Life is a fleeting pleasure.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 209,
    "title": "Close-Up",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/%DA%A9%D9%84%D9%88%D8%B2_%D8%A2%D9%BE_%D8%A7%D9%86%DA%AF%D9%84%DB%8C%D8%B3%DB%8C_%28%D9%BE%D9%88%D8%B3%D8%AA%D8%B1%29.jpg/1280px-%DA%A9%D9%84%D9%88%D8%B2_%D8%A2%D9%BE_%D8%A7%D9%86%DA%AF%D9%84%DB%8C%D8%B3%DB%8C_%28%D9%BE%D9%88%D8%B3%D8%AA%D8%B1%29.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/%DA%A9%D9%84%D9%88%D8%B2_%D8%A2%D9%BE_%D8%A7%D9%86%DA%AF%D9%84%DB%8C%D8%B3%DB%8C_%28%D9%BE%D9%88%D8%B3%D8%AA%D8%B1%29.jpg/1280px-%DA%A9%D9%84%D9%88%D8%B2_%D8%A2%D9%BE_%D8%A7%D9%86%DA%AF%D9%84%DB%8C%D8%B3%DB%8C_%28%D9%BE%D9%88%D8%B3%D8%AA%D8%B1%29.jpg",
    "overview": "The true story of a man who impersonated a famous filmmaker.",
    "release_date": "1990-02-01",
    "vote_average": 8,
    "runtime": 98,
    "genre_ids": [
      18,
      80,
      99
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 99,
        "name": "Documentário"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 210,
    "title": "Cloud",
    "poster_path": "https://theposterdb.com/api/assets/617568/view",
    "backdrop_path": "https://theposterdb.com/api/assets/617568/view",
    "overview": "A mysterious and atmospheric film from Kiyoshi Kurosawa.",
    "release_date": "2024-09-27",
    "vote_average": 6.8,
    "runtime": 102,
    "genre_ids": [
      53
    ],
    "genres": [
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 211,
    "title": "Clown",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/95/3y/la/z2/clown-1200-1200-675-675-crop-000000.jpg?v=3bcce92ef4",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/95/3y/la/z2/clown-1200-1200-675-675-crop-000000.jpg?v=3bcce92ef4",
    "overview": "A loving father finds a clown suit for his son's birthday party, only to realize that it's cursed.",
    "release_date": "2014-11-13",
    "vote_average": 6.1,
    "runtime": 100,
    "genre_ids": [
      27,
      18
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "The kids will love him.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 212,
    "title": "Clown in a Cornfield",
    "poster_path": "https://theposterdb.com/api/assets/603799/view",
    "backdrop_path": "https://theposterdb.com/api/assets/603799/view",
    "overview": "A horror-comedy based on the novel of the same name.",
    "release_date": "2025-01-01",
    "vote_average": 6.6,
    "runtime": 95,
    "genre_ids": [
      27,
      35
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 35,
        "name": "Comédia"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 213,
    "title": "Cobweb",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/r2/e0/td/ls/cobweb-1200-1200-675-675-crop-000000.jpg?v=b2df2a9524",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/r2/e0/td/ls/cobweb-1200-1200-675-675-crop-000000.jpg?v=b2df2a9524",
    "overview": "A director becomes obsessed with reshooting the ending of his film.",
    "release_date": "2023-09-27",
    "vote_average": 7.2,
    "runtime": 135,
    "genre_ids": [
      35,
      18
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 214,
    "title": "Coffee and Cigarettes",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/2c/fu/h4/sj/coffee-cigarettes-1200-1200-675-675-crop-000000.jpg?v=b528dfd4d2",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/2c/fu/h4/sj/coffee-cigarettes-1200-1200-675-675-crop-000000.jpg?v=b528dfd4d2",
    "overview": "A series of vignettes featuring various actors and musicians drinking coffee and smoking cigarettes.",
    "release_date": "2003-09-05",
    "vote_average": 7,
    "runtime": 95,
    "genre_ids": [
      35,
      18
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 215,
    "title": "Coma",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/ej/g0/zo/ue/dGQOIzg3zjeaDSCczUPnYfAxS3D-1200-1200-675-675-crop-000000.jpg?v=9f605cb380",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/ej/g0/zo/ue/dGQOIzg3zjeaDSCczUPnYfAxS3D-1200-1200-675-675-crop-000000.jpg?v=9f605cb380",
    "overview": "A young girl is haunted by a mysterious coma.",
    "release_date": "2022-02-16",
    "vote_average": 6.5,
    "runtime": 81,
    "genre_ids": [
      18,
      9648
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 9648,
        "name": "Mistério"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 216,
    "title": "Coming Out",
    "poster_path": "https://picsum.photos/seed/placeholder/500/750",
    "backdrop_path": "https://picsum.photos/seed/placeholder/500/750",
    "overview": "A young teacher in East Berlin struggles with his sexuality.",
    "release_date": "1989-11-09",
    "vote_average": 6.8,
    "runtime": 113,
    "genre_ids": [
      18,
      10749
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 217,
    "title": "Common Wealth",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/rt/0q/cu/fy/dx5iohp5mAVLt8L94s8wTz8G0hY-1200-1200-675-675-crop-000000.jpg?v=dc708c9aa5",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/rt/0q/cu/fy/dx5iohp5mAVLt8L94s8wTz8G0hY-1200-1200-675-675-crop-000000.jpg?v=dc708c9aa5",
    "overview": "A real estate agent discovers a hidden fortune in an apartment and must deal with the other tenants.",
    "release_date": "2000-10-13",
    "vote_average": 7.3,
    "runtime": 107,
    "genre_ids": [
      35,
      53
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 218,
    "title": "Companion",
    "poster_path": "https://a.ltrbxd.com/resized/alternative-backdrop/9/7/7/1/7/2/tmdb/3KjdRYgPC5o12NWNL0PaBmsBDz8-1200-1200-675-675-crop-000000.jpg?v=ff13eb645f",
    "backdrop_path": "https://a.ltrbxd.com/resized/alternative-backdrop/9/7/7/1/7/2/tmdb/3KjdRYgPC5o12NWNL0PaBmsBDz8-1200-1200-675-675-crop-000000.jpg?v=ff13eb645f",
    "overview": "A sci-fi thriller with a plot that is being kept under wraps.",
    "release_date": "2025-01-31",
    "vote_average": 6.9,
    "runtime": 107,
    "genre_ids": [
      878,
      27,
      53
    ],
    "genres": [
      {
        "id": 878,
        "name": "Ficção científica"
      },
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 219,
    "title": "Conception",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/7/3/8/4/7/73847-conception-2005-0-230-0-345-crop.jpg?v=87e2e6eeab",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/7/3/8/4/7/73847-conception-2005-0-230-0-345-crop.jpg?v=87e2e6eeab",
    "overview": "A film about the various ways people conceive children.",
    "release_date": "2005-09-30",
    "vote_average": 6,
    "runtime": 138,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 220,
    "title": "Conclave",
    "poster_path": "https://theposterdb.com/api/assets/535415/view",
    "backdrop_path": "https://theposterdb.com/api/assets/535415/view",
    "overview": "Following the death of the Pope, a conclave of cardinals gathers to elect his successor.",
    "release_date": "2024-11-08",
    "vote_average": 7.5,
    "runtime": 120,
    "genre_ids": [
      53,
      18,
      9648
    ],
    "genres": [
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 9648,
        "name": "Mistério"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 221,
    "title": "Confessions",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/2/6/2/1/0/1/262101-confessions-0-230-0-345-crop.jpg?v=2ab6559969",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/2/6/2/1/0/1/262101-confessions-0-230-0-345-crop.jpg?v=2ab6559969",
    "overview": "A middle school teacher takes revenge on the students who killed her daughter.",
    "release_date": "2010-06-05",
    "vote_average": 7.7,
    "runtime": 106,
    "genre_ids": [
      18,
      53
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 222,
    "title": "Confidentially Yours",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/vc/ol/ci/z0/confidentally-1200-1200-675-675-crop-000000.jpg?v=abe3835e4d",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/vc/ol/ci/z0/confidentally-1200-1200-675-675-crop-000000.jpg?v=abe3835e4d",
    "overview": "A woman tries to clear her boss's name after he is accused of murder.",
    "release_date": "1983-08-10",
    "vote_average": 7.3,
    "runtime": 110,
    "genre_ids": [
      35,
      80,
      9648,
      10749,
      53
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 9648,
        "name": "Mistério"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 223,
    "title": "Conquest",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/c5/1d/e6/12/conquest-1200-1200-675-675-crop-000000.jpg?v=a50f6c441c",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/c5/1d/e6/12/conquest-1200-1200-675-675-crop-000000.jpg?v=a50f6c441c",
    "overview": "A young man battles monsters and demons in a fantasy world.",
    "release_date": "1983-06-02",
    "vote_average": 5.6,
    "runtime": 93,
    "genre_ids": [
      14,
      27
    ],
    "genres": [
      {
        "id": 14,
        "name": "Fantasia"
      },
      {
        "id": 27,
        "name": "Terror"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 224,
    "title": "Continent",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/9/1/8/1/7/8/918178-continent-0-230-0-345-crop.jpg?v=59a557f991",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/9/1/8/1/7/8/918178-continent-0-230-0-345-crop.jpg?v=59a557f991",
    "overview": "A group of people are stranded on a mysterious continent.",
    "release_date": "2024-01-01",
    "vote_average": 6,
    "runtime": 90,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 225,
    "title": "Cosmos",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/h9/2f/s8/tq/cosmos-2015-1200-1200-675-675-crop-000000.jpg?v=d4ab7540bd",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/h9/2f/s8/tq/cosmos-2015-1200-1200-675-675-crop-000000.jpg?v=d4ab7540bd",
    "overview": "Two friends on vacation find themselves in a series of bizarre and unsettling situations.",
    "release_date": "2015-12-03",
    "vote_average": 5.9,
    "runtime": 103,
    "genre_ids": [
      18,
      9648
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 9648,
        "name": "Mistério"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 226,
    "title": "Craig's Wife",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/5z/02/ob/m3/33jVTjHv4MmJtSIRDQljMToYrXU-1200-1200-675-675-crop-000000.jpg?v=34d11c76e9",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/5z/02/ob/m3/33jVTjHv4MmJtSIRDQljMToYrXU-1200-1200-675-675-crop-000000.jpg?v=34d11c76e9",
    "overview": "A woman who is obsessed with her house and possessions drives away her husband.",
    "release_date": "1936-09-25",
    "vote_average": 6.6,
    "runtime": 75,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 227,
    "title": "Crash",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/6x/03/cy/7v/crash-1200-1200-675-675-crop-000000.jpg?v=0c7dc7f09b",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/6x/03/cy/7v/crash-1200-1200-675-675-crop-000000.jpg?v=0c7dc7f09b",
    "overview": "A group of people get sexually aroused by car crashes.",
    "release_date": "1996-07-17",
    "vote_average": 6.4,
    "runtime": 100,
    "genre_ids": [
      18,
      53
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "Love in the dying moments of the twentieth century.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 228,
    "title": "Creep",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/p1/cu/dl/2n/creep-1200-1200-675-675-crop-000000.jpg?v=c424a3acc8",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/p1/cu/dl/2n/creep-1200-1200-675-675-crop-000000.jpg?v=c424a3acc8",
    "overview": "A videographer answers a Craigslist ad and finds himself in a bizarre and terrifying situation.",
    "release_date": "2014-03-08",
    "vote_average": 6.3,
    "runtime": 77,
    "genre_ids": [
      27,
      53
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "The found footage film that will make you never trust anyone again.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 229,
    "title": "Creep 2",
    "poster_path": "https://theposterdb.com/api/assets/8029/view",
    "backdrop_path": "https://theposterdb.com/api/assets/8029/view",
    "overview": "A serial killer who documents his murders finds a new victim who is just as disturbed as he is.",
    "release_date": "2017-10-24",
    "vote_average": 6.5,
    "runtime": 80,
    "genre_ids": [
      27,
      53
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 230,
    "title": "Creepy",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/ww/h3/ez/yl/creepy-1200-1200-675-675-crop-000000.jpg?v=7e5a11e8c5",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/ww/h3/ez/yl/creepy-1200-1200-675-675-crop-000000.jpg?v=7e5a11e8c5",
    "overview": "A former detective investigates a missing persons case and finds himself drawn into a dark and twisted world.",
    "release_date": "2016-06-18",
    "vote_average": 6.7,
    "runtime": 130,
    "genre_ids": [
      53,
      9648,
      27
    ],
    "genres": [
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 9648,
        "name": "Mistério"
      },
      {
        "id": 27,
        "name": "Terror"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 231,
    "title": "Cria!",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/n0/gr/q1/mv/cria-cuervos-1200-1200-675-675-crop-000000.jpg?v=909b4b9565",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/n0/gr/q1/mv/cria-cuervos-1200-1200-675-675-crop-000000.jpg?v=909b4b9565",
    "overview": "A young girl in Madrid fantasizes about killing her authoritarian father.",
    "release_date": "1976-01-26",
    "vote_average": 7.7,
    "runtime": 110,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 232,
    "title": "Cries and Whispers",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/ov/86/s9/16/cries%20and%20whispers-1200-1200-675-675-crop-000000.jpg?v=fd2e4e8b5e",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/ov/86/s9/16/cries%20and%20whispers-1200-1200-675-675-crop-000000.jpg?v=fd2e4e8b5e",
    "overview": "Three sisters gather in a country house to care for their dying sister.",
    "release_date": "1972-12-21",
    "vote_average": 7.9,
    "runtime": 91,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 233,
    "title": "Crimewave",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/p5/zi/0m/4q/crimewave-1200-1200-675-675-crop-000000.jpg?v=cb4804cfb0",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/p5/zi/0m/4q/crimewave-1200-1200-675-675-crop-000000.jpg?v=cb4804cfb0",
    "overview": "A bizarre and surreal comedy about a man on death row.",
    "release_date": "1985-05-19",
    "vote_average": 5.7,
    "runtime": 83,
    "genre_ids": [
      35,
      80
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "tagline": "The all-new laugh-a-minute riot from the creators of The Evil Dead.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 234,
    "title": "Crossing",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/k4/1z/ft/h6/crossing-1200-1200-675-675-crop-000000.jpg?v=9755cc474f",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/k4/1z/ft/h6/crossing-1200-1200-675-675-crop-000000.jpg?v=9755cc474f",
    "overview": "A retired teacher in Georgia travels to Turkey to find a transgender woman.",
    "release_date": "2024-04-19",
    "vote_average": 6.8,
    "runtime": 105,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 235,
    "title": "Cruel Story of Youth",
    "poster_path": "https://theposterdb.com/api/assets/423311/view",
    "backdrop_path": "https://theposterdb.com/api/assets/423311/view",
    "overview": "A rebellious teenager gets involved with a gang of delinquents.",
    "release_date": "1960-06-03",
    "vote_average": 7.3,
    "runtime": 96,
    "genre_ids": [
      18,
      80
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 236,
    "title": "Cuckoo",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/28/td/0u/iu/cuckoo-1200-1200-675-675-crop-000000.jpg?v=fb8c455aa4",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/28/td/0u/iu/cuckoo-1200-1200-675-675-crop-000000.jpg?v=fb8c455aa4",
    "overview": "A teenage girl moves to a resort with her family and discovers a dark secret.",
    "release_date": "2024-08-09",
    "vote_average": 6.5,
    "runtime": 102,
    "genre_ids": [
      27
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 237,
    "title": "Cure",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/uf/3p/7c/vn/cure-1997-1200-1200-675-675-crop-000000.jpg?v=13b9c13ede",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/uf/3p/7c/vn/cure-1997-1200-1200-675-675-crop-000000.jpg?v=13b9c13ede",
    "overview": "A detective investigates a series of bizarre murders where the victims are killed in the same way.",
    "release_date": "1997-12-27",
    "vote_average": 7.4,
    "runtime": 111,
    "genre_ids": [
      80,
      9648,
      53,
      27
    ],
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 9648,
        "name": "Mistério"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 27,
        "name": "Terror"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 238,
    "title": "Cycle",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/9/99/Onna_Keirin-o_poster.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/9/99/Onna_Keirin-o_poster.jpg",
    "overview": "A short film about the cycle of life.",
    "release_date": "2022-01-01",
    "vote_average": 6,
    "runtime": 15,
    "genre_ids": [
      16,
      18
    ],
    "genres": [
      {
        "id": 16,
        "name": "Animação"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 239,
    "title": "Daguerréotypes",
    "poster_path": "https://theposterdb.com/api/assets/373146/view",
    "backdrop_path": "https://theposterdb.com/api/assets/373146/view",
    "overview": "A documentary about the shopkeepers on a single street in Paris.",
    "release_date": "1975-01-01",
    "vote_average": 7.2,
    "runtime": 80,
    "genre_ids": [
      99
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 240,
    "title": "Dahomey",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/06/hh/ia/2d/daomey-1200-1200-675-675-crop-000000.jpg?v=23bcf9306d",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/06/hh/ia/2d/daomey-1200-1200-675-675-crop-000000.jpg?v=23bcf9306d",
    "overview": "A documentary about the return of royal treasures from Dahomey to Benin.",
    "release_date": "2024-02-18",
    "vote_average": 6.6,
    "runtime": 67,
    "genre_ids": [
      99,
      36
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      },
      {
        "id": 36,
        "name": "História"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 241,
    "title": "Daisies",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/2/25/Marie_on_the_bed.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/2/25/Marie_on_the_bed.jpg",
    "overview": "Two teenage girls decide that since the world is spoiled, they will be spoiled as well.",
    "release_date": "1966-12-30",
    "vote_average": 7.4,
    "runtime": 76,
    "genre_ids": [
      35,
      18
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 242,
    "title": "Damnation",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/bj/je/47/4g/damnation-1200-1200-675-675-crop-000000.jpg?v=63401c310c",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/bj/je/47/4g/damnation-1200-1200-675-675-crop-000000.jpg?v=63401c310c",
    "overview": "A man in a desolate Hungarian town becomes obsessed with a singer.",
    "release_date": "1988-02-16",
    "vote_average": 7.7,
    "runtime": 120,
    "genre_ids": [
      18,
      80,
      10749
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 243,
    "title": "Dancer in the Dark",
    "poster_path": "https://theposterdb.com/api/assets/215626/view",
    "backdrop_path": "https://theposterdb.com/api/assets/215626/view",
    "overview": "A Czech immigrant in the United States who is going blind saves up money for her son's eye operation.",
    "release_date": "2000-09-08",
    "vote_average": 7.9,
    "runtime": 140,
    "genre_ids": [
      18,
      80,
      10402
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 10402,
        "name": "Música"
      }
    ],
    "tagline": "You don't need eyes to see.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 244,
    "title": "Dancing on the Edge of a Volcano",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/f/f2/JacquelineBissetSept08.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/f/f2/JacquelineBissetSept08.jpg",
    "overview": "A group of young filmmakers in Beirut try to make a movie during the Lebanese Civil War.",
    "release_date": "2023-01-01",
    "vote_average": 6,
    "runtime": 90,
    "genre_ids": [
      18,
      99
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 99,
        "name": "Documentário"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 245,
    "title": "Dark City",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/l2/xg/zy/tm/dark-city-1200-1200-675-675-crop-000000.jpg?v=738b13856a",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/l2/xg/zy/tm/dark-city-1200-1200-675-675-crop-000000.jpg?v=738b13856a",
    "overview": "A man wakes up in a hotel room with amnesia and is accused of murder.",
    "release_date": "1998-02-27",
    "vote_average": 7.5,
    "runtime": 100,
    "genre_ids": [
      9648,
      878,
      53
    ],
    "genres": [
      {
        "id": 9648,
        "name": "Mistério"
      },
      {
        "id": 878,
        "name": "Ficção científica"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "They built the city to see what makes us tick. Last night one of them went off.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 246,
    "title": "Dark Habits",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/fo/ct/cx/b1/njHtlpln6iBMonTkXGI7plRMaIM-1200-1200-675-675-crop-000000.jpg?v=9c3a1eeaae",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/fo/ct/cx/b1/njHtlpln6iBMonTkXGI7plRMaIM-1200-1200-675-675-crop-000000.jpg?v=9c3a1eeaae",
    "overview": "A nightclub singer hides out in a convent of eccentric nuns.",
    "release_date": "1983-09-28",
    "vote_average": 6.7,
    "runtime": 114,
    "genre_ids": [
      35,
      18
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 247,
    "title": "Dark Passage",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/de/b6/eq/f8/dark-passage-1200-1200-675-675-crop-000000.jpg?v=08b83ed295",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/de/b6/eq/f8/dark-passage-1200-1200-675-675-crop-000000.jpg?v=08b83ed295",
    "overview": "A man convicted of murder escapes from prison and has plastic surgery to change his appearance.",
    "release_date": "1947-09-27",
    "vote_average": 7.5,
    "runtime": 106,
    "genre_ids": [
      80,
      18,
      53
    ],
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 248,
    "title": "Dashcam",
    "poster_path": "https://theposterdb.com/api/assets/600767/view",
    "backdrop_path": "https://theposterdb.com/api/assets/600767/view",
    "overview": "A musician livestreams her drive and ends up in a terrifying situation.",
    "release_date": "2021-09-13",
    "vote_average": 5.6,
    "runtime": 87,
    "genre_ids": [
      27,
      53
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 249,
    "title": "Daughter of the Nile",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/8y/7e/qa/61/daughter-of-nile-1200-1200-675-675-crop-000000.jpg?v=dfc3fa474b",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/8y/7e/qa/61/daughter-of-nile-1200-1200-675-675-crop-000000.jpg?v=dfc3fa474b",
    "overview": "A young woman in Taipei tries to escape her family and find a better life.",
    "release_date": "1987-10-29",
    "vote_average": 7.1,
    "runtime": 93,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 250,
    "title": "Dawn of the Dead",
    "poster_path": "https://theposterdb.com/api/assets/62063/view",
    "backdrop_path": "https://theposterdb.com/api/assets/62063/view",
    "overview": "Four survivors of a zombie apocalypse take refuge in a shopping mall.",
    "release_date": "1978-09-02",
    "vote_average": 7.4,
    "runtime": 127,
    "genre_ids": [
      27,
      12
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 12,
        "name": "Aventura"
      }
    ],
    "tagline": "When there's no more room in hell, the dead will walk the earth.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 251,
    "title": "Dawn of the Dead (2004)",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/tx/np/24/bt/3ABFCC3C-1CAC-49B5-9ABD-DF30B112DF68-1200-1200-675-675-crop-000000.jpg?v=079a772d99",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/tx/np/24/bt/3ABFCC3C-1CAC-49B5-9ABD-DF30B112DF68-1200-1200-675-675-crop-000000.jpg?v=079a772d99",
    "overview": "A remake of the 1978 classic, with a group of survivors taking refuge in a shopping mall during a zombie apocalypse.",
    "release_date": "2004-03-19",
    "vote_average": 7,
    "runtime": 101,
    "genre_ids": [
      27,
      28
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 28,
        "name": "Ação"
      }
    ],
    "tagline": "When the undead rise, civilization will fall.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 252,
    "title": "Day of the Dead",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/ay/8o/ex/l3/day-of-the-dead-1200-1200-675-675-crop-000000.jpg?v=2db5b8f6f6",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/ay/8o/ex/l3/day-of-the-dead-1200-1200-675-675-crop-000000.jpg?v=2db5b8f6f6",
    "overview": "A group of scientists and soldiers hide out in an underground bunker during a zombie apocalypse.",
    "release_date": "1985-07-19",
    "vote_average": 6.9,
    "runtime": 101,
    "genre_ids": [
      27,
      878
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 878,
        "name": "Ficção científica"
      }
    ],
    "tagline": "The darkest day of horror the world has ever known.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 253,
    "title": "Days",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/jh/ad/9f/r4/days-1200-1200-675-675-crop-000000.jpg?v=3b6d7ee4c8",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/jh/ad/9f/r4/days-1200-1200-675-675-crop-000000.jpg?v=3b6d7ee4c8",
    "overview": "A lonely man in Taipei meets a younger man.",
    "release_date": "2020-02-27",
    "vote_average": 6.9,
    "runtime": 127,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 254,
    "title": "Days of Being Wild",
    "poster_path": "https://theposterdb.com/api/assets/140247/view",
    "backdrop_path": "https://theposterdb.com/api/assets/140247/view",
    "overview": "A young man in 1960s Hong Kong searches for his birth mother.",
    "release_date": "1990-12-15",
    "vote_average": 7.5,
    "runtime": 94,
    "genre_ids": [
      18,
      80,
      10749
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 255,
    "title": "Dead Man's Letters",
    "poster_path": "https://theposterdb.com/api/assets/493175/view",
    "backdrop_path": "https://theposterdb.com/api/assets/493175/view",
    "overview": "A group of people survive a nuclear war and must find a way to live in the aftermath.",
    "release_date": "1986-09-15",
    "vote_average": 7.2,
    "runtime": 87,
    "genre_ids": [
      878,
      18
    ],
    "genres": [
      {
        "id": 878,
        "name": "Ficção científica"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 256,
    "title": "Dead or Alive",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/8c/wc/8u/fo/dead%20or%20alive%20-1200-1200-675-675-crop-000000.jpg?v=f631bb8b68",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/8c/wc/8u/fo/dead%20or%20alive%20-1200-1200-675-675-crop-000000.jpg?v=f631bb8b68",
    "overview": "A yakuza and a detective find themselves on a collision course.",
    "release_date": "1999-11-27",
    "vote_average": 6.8,
    "runtime": 105,
    "genre_ids": [
      28,
      80,
      53
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 257,
    "title": "Dead Talents Society",
    "poster_path": "https://theposterdb.com/api/assets/591454/view",
    "backdrop_path": "https://theposterdb.com/api/assets/591454/view",
    "overview": "A group of aspiring filmmakers try to make a movie.",
    "release_date": "2024-01-01",
    "vote_average": 6,
    "runtime": 90,
    "genre_ids": [
      35,
      18
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 258,
    "title": "Deadly Friend",
    "poster_path": "https://theposterdb.com/api/assets/182836/view",
    "backdrop_path": "https://theposterdb.com/api/assets/182836/view",
    "overview": "A teenage genius implants a microchip into his dead girlfriend's brain, but she comes back as a killer.",
    "release_date": "1986-10-10",
    "vote_average": 5.8,
    "runtime": 91,
    "genre_ids": [
      27,
      878
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 878,
        "name": "Ficção científica"
      }
    ],
    "tagline": "She's the girl next door. And she's going to kill you.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 259,
    "title": "Deadpool & Wolverine",
    "poster_path": "https://theposterdb.com/api/assets/494048/view",
    "backdrop_path": "https://theposterdb.com/api/assets/494048/view",
    "overview": "The Merc with a Mouth teams up with the Wolverine.",
    "release_date": "2024-07-26",
    "vote_average": 8,
    "runtime": 127,
    "genre_ids": [
      28,
      35,
      878
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 878,
        "name": "Ficção científica"
      }
    ],
    "tagline": "Come together.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 260,
    "title": "Dear Wendy",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/v8/v5/hf/nn/h3EmI6sR3THbrsMe5x12qnFtsH4-1200-1200-675-675-crop-000000.jpg?v=4c57f4d517",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/v8/v5/hf/nn/h3EmI6sR3THbrsMe5x12qnFtsH4-1200-1200-675-675-crop-000000.jpg?v=4c57f4d517",
    "overview": "A group of young pacifists in a small mining town form a secret gun club.",
    "release_date": "2005-01-21",
    "vote_average": 6.8,
    "runtime": 105,
    "genre_ids": [
      35,
      80,
      18
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 261,
    "title": "Death by Metal",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Eagles_of_Death_Metal_on_stage_at_the_Commodore_Ballroom_July_20th_2009.jpg/1280px-Eagles_of_Death_Metal_on_stage_at_the_Commodore_Ballroom_July_20th_2009.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Eagles_of_Death_Metal_on_stage_at_the_Commodore_Ballroom_July_20th_2009.jpg/1280px-Eagles_of_Death_Metal_on_stage_at_the_Commodore_Ballroom_July_20th_2009.jpg",
    "overview": "A documentary about the life and music of Chuck Schuldiner, the frontman of the band Death.",
    "release_date": "2016-10-14",
    "vote_average": 7.5,
    "runtime": 108,
    "genre_ids": [
      99,
      10402
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      },
      {
        "id": 10402,
        "name": "Música"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 262,
    "title": "Death of a Unicorn",
    "poster_path": "https://theposterdb.com/api/assets/555634/view",
    "backdrop_path": "https://theposterdb.com/api/assets/555634/view",
    "overview": "A father and daughter hit a unicorn on their way to a weekend retreat.",
    "release_date": "2025-01-01",
    "vote_average": 6.8,
    "runtime": 98,
    "genre_ids": [
      35
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 263,
    "title": "Defying Gravity: The Curtain Rises on Wicked",
    "poster_path": "https://theposterdb.com/api/assets/549558/view",
    "backdrop_path": "https://theposterdb.com/api/assets/549558/view",
    "overview": "A behind-the-scenes look at the making of the movie adaptation of the musical \"Wicked\".",
    "release_date": "2024-11-25",
    "vote_average": 7.5,
    "runtime": 58,
    "genre_ids": [
      99
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 264,
    "title": "Delphine and Carole",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/3/37/Delphine_Seyrig_circa_1972.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/3/37/Delphine_Seyrig_circa_1972.jpg",
    "overview": "A documentary about the friendship and collaboration between actress Delphine Seyrig and filmmaker Carole Roussopoulos.",
    "release_date": "2019-02-09",
    "vote_average": 7,
    "runtime": 70,
    "genre_ids": [
      99
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 265,
    "title": "Demons",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/bu/aa/ue/tu/demons-1200-1200-675-675-crop-000000.jpg?v=c832e1b504",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/bu/aa/ue/tu/demons-1200-1200-675-675-crop-000000.jpg?v=c832e1b504",
    "overview": "A samurai returns home to find his family in ruins.",
    "release_date": "1971-02-17",
    "vote_average": 7.4,
    "runtime": 117,
    "genre_ids": [
      18,
      36
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 36,
        "name": "História"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 266,
    "title": "Den of Thieves 2: Pantera",
    "poster_path": "https://theposterdb.com/api/assets/557870/view",
    "backdrop_path": "https://theposterdb.com/api/assets/557870/view",
    "overview": "The sequel to the 2018 action film.",
    "release_date": "2025-01-10",
    "vote_average": 6.9,
    "runtime": 118,
    "genre_ids": [
      28,
      80,
      53
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 267,
    "title": "Destiny",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Destiny_%281921%29_poster.webp/1000px-Destiny_%281921%29_poster.webp.png",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Destiny_%281921%29_poster.webp/1000px-Destiny_%281921%29_poster.webp.png",
    "overview": "A young woman is confronted by Death, who has come for her lover.",
    "release_date": "1921-10-06",
    "vote_average": 7.7,
    "runtime": 98,
    "genre_ids": [
      14,
      18,
      53
    ],
    "genres": [
      {
        "id": 14,
        "name": "Fantasia"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 268,
    "title": "Destroy All Monsters",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/ix/0v/sc/zw/destroy%20all%20monsters-1200-1200-675-675-crop-000000.jpg?v=eac1a36caa",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/ix/0v/sc/zw/destroy%20all%20monsters-1200-1200-675-675-crop-000000.jpg?v=eac1a36caa",
    "overview": "All of Earth's monsters are gathered on a single island, but aliens take control of them and unleash them on the world.",
    "release_date": "1968-08-01",
    "vote_average": 6.8,
    "runtime": 89,
    "genre_ids": [
      28,
      12,
      878
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 12,
        "name": "Aventura"
      },
      {
        "id": 878,
        "name": "Ficção científica"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 269,
    "title": "Detroit Rock City",
    "poster_path": "https://theposterdb.com/api/assets/265472/view",
    "backdrop_path": "https://theposterdb.com/api/assets/265472/view",
    "overview": "Four teenagers in 1978 will do whatever it takes to get to a KISS concert in Detroit.",
    "release_date": "1999-08-13",
    "vote_average": 6.8,
    "runtime": 95,
    "genre_ids": [
      35,
      10402
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 10402,
        "name": "Música"
      }
    ],
    "tagline": "The night they came to see KISS, they had to get in, get their girl, get their tickets, and get their asses kicked!",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 270,
    "title": "Dial M for Murder",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/4/48/Dial_M_For_Murder.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/4/48/Dial_M_For_Murder.jpg",
    "overview": "A man plots to have his wealthy wife murdered.",
    "release_date": "1954-05-29",
    "vote_average": 8,
    "runtime": 105,
    "genre_ids": [
      80,
      53
    ],
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 271,
    "title": "Dicks: The Musical",
    "poster_path": "https://theposterdb.com/api/assets/444245/view",
    "backdrop_path": "https://theposterdb.com/api/assets/444245/view",
    "overview": "Two self-obsessed businessmen discover they're identical twins and decide to swap places.",
    "release_date": "2023-09-29",
    "vote_average": 6.5,
    "runtime": 86,
    "genre_ids": [
      35,
      10402
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 10402,
        "name": "Música"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 272,
    "title": "Dìdi (弟弟)",
    "poster_path": "https://theposterdb.com/api/assets/521635/view",
    "backdrop_path": "https://theposterdb.com/api/assets/521635/view",
    "overview": "A coming-of-age story about a Taiwanese-American boy.",
    "release_date": "2024-01-19",
    "vote_average": 7,
    "runtime": 91,
    "genre_ids": [
      35,
      18
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 273,
    "title": "Different from the Others",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/2/21/Anders_als_die_andern_1919_poster.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/2/21/Anders_als_die_andern_1919_poster.jpg",
    "overview": "One of the first sympathetic portrayals of homosexuality in cinema.",
    "release_date": "1919-05-28",
    "vote_average": 6.7,
    "runtime": 50,
    "genre_ids": [
      18,
      10749
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 274,
    "title": "Dinner in America",
    "poster_path": "https://theposterdb.com/api/assets/637526/view",
    "backdrop_path": "https://theposterdb.com/api/assets/637526/view",
    "overview": "A punk rocker on the run from the law and a geeky young woman form an unlikely bond.",
    "release_date": "2020-01-24",
    "vote_average": 7.3,
    "runtime": 106,
    "genre_ids": [
      35,
      18,
      10749,
      10402
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 10402,
        "name": "Música"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 275,
    "title": "Dio: Dreamers Never Die",
    "poster_path": "https://theposterdb.com/api/assets/293885/view",
    "backdrop_path": "https://theposterdb.com/api/assets/293885/view",
    "overview": "A documentary about the life and career of heavy metal singer Ronnie James Dio.",
    "release_date": "2022-09-28",
    "vote_average": 7.8,
    "runtime": 135,
    "genre_ids": [
      99,
      10402
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      },
      {
        "id": 10402,
        "name": "Música"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 276,
    "title": "Distance",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/gn/y9/5a/5g/distance-1200-1200-675-675-crop-000000.jpg?v=5f03ff32af",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/gn/y9/5a/5g/distance-1200-1200-675-675-crop-000000.jpg?v=5f03ff32af",
    "overview": "Four people whose loved ones were members of a cult gather to remember them.",
    "release_date": "2001-05-26",
    "vote_average": 6.7,
    "runtime": 132,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 277,
    "title": "Do Not Expect Too Much from the End of the World",
    "poster_path": "https://theposterdb.com/api/assets/488673/view",
    "backdrop_path": "https://theposterdb.com/api/assets/488673/view",
    "overview": "An overworked production assistant in Bucharest must film a workplace safety video.",
    "release_date": "2023-10-27",
    "vote_average": 7,
    "runtime": 163,
    "genre_ids": [
      35,
      18
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 278,
    "title": "Do the Right Thing",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/rz/oo/nx/09/do-the-right-thing-1200-1200-675-675-crop-000000.jpg?v=896d43f400",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/rz/oo/nx/09/do-the-right-thing-1200-1200-675-675-crop-000000.jpg?v=896d43f400",
    "overview": "Racial tensions boil over in a Brooklyn neighborhood on the hottest day of the year.",
    "release_date": "1989-06-30",
    "vote_average": 7.9,
    "runtime": 120,
    "genre_ids": [
      18,
      80
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "tagline": "It's the hottest day of the summer. You can do nothing, you can do something, or you can...",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 279,
    "title": "Dog Bite Dog",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/2o/qz/4g/ax/dog%20bite-1200-1200-675-675-crop-000000.jpg?v=6ce859d0c9",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/2o/qz/4g/ax/dog%20bite-1200-1200-675-675-crop-000000.jpg?v=6ce859d0c9",
    "overview": "A brutal and violent film about a Cambodian hitman in Hong Kong.",
    "release_date": "2006-08-17",
    "vote_average": 7.1,
    "runtime": 109,
    "genre_ids": [
      28,
      80,
      53
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 280,
    "title": "Dogma",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/of/08/nr/ui/dogma-1200-1200-675-675-crop-000000.jpg?v=b4e3c34600",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/of/08/nr/ui/dogma-1200-1200-675-675-crop-000000.jpg?v=b4e3c34600",
    "overview": "Two fallen angels try to get back into Heaven.",
    "release_date": "1999-11-12",
    "vote_average": 6.9,
    "runtime": 130,
    "genre_ids": [
      35,
      12,
      14
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 12,
        "name": "Aventura"
      },
      {
        "id": 14,
        "name": "Fantasia"
      }
    ],
    "tagline": "It can be hell getting into heaven.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 281,
    "title": "Dogs Don't Wear Pants",
    "poster_path": "https://theposterdb.com/api/assets/416761/view",
    "backdrop_path": "https://theposterdb.com/api/assets/416761/view",
    "overview": "A grieving heart surgeon discovers the world of BDSM.",
    "release_date": "2019-11-01",
    "vote_average": 6.8,
    "runtime": 105,
    "genre_ids": [
      18,
      35,
      10749
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 282,
    "title": "Dogtooth",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/j5/2q/bf/t6/dogtooth-1200-1200-675-675-crop-000000.jpg?v=59683fa08b",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/j5/2q/bf/t6/dogtooth-1200-1200-675-675-crop-000000.jpg?v=59683fa08b",
    "overview": "Three teenagers are confined to their family's isolated compound and are given a bizarre and twisted education.",
    "release_date": "2009-11-11",
    "vote_average": 7.1,
    "runtime": 97,
    "genre_ids": [
      18,
      53
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 283,
    "title": "Dogville",
    "poster_path": "https://theposterdb.com/api/assets/217051/view",
    "backdrop_path": "https://theposterdb.com/api/assets/217051/view",
    "overview": "A woman on the run from the mob takes refuge in a small Colorado town.",
    "release_date": "2003-05-19",
    "vote_average": 7.8,
    "runtime": 178,
    "genre_ids": [
      80,
      18,
      53
    ],
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "A story about a town called Dogville.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 284,
    "title": "Dolls",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/hm/xl/yf/a5/dolls-1200-1200-675-675-crop-000000.jpg?v=64631a8609",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/hm/xl/yf/a5/dolls-1200-1200-675-675-crop-000000.jpg?v=64631a8609",
    "overview": "Three stories of tragic love.",
    "release_date": "2002-09-05",
    "vote_average": 7.4,
    "runtime": 114,
    "genre_ids": [
      18,
      10749
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 285,
    "title": "Door",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/bs/6z/3j/zo/3SrxfpmXfsjibeFQK562gGQDCRx-1200-1200-675-675-crop-000000.jpg?v=ca90ab94f0",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/bs/6z/3j/zo/3SrxfpmXfsjibeFQK562gGQDCRx-1200-1200-675-675-crop-000000.jpg?v=ca90ab94f0",
    "overview": "A woman is terrorized by a mysterious salesman.",
    "release_date": "1988-07-09",
    "vote_average": 6.2,
    "runtime": 94,
    "genre_ids": [
      27,
      53
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 286,
    "title": "Door II: Tôkyô Diary",
    "poster_path": "https://theposterdb.com/api/assets/552187/view",
    "backdrop_path": "https://theposterdb.com/api/assets/552187/view",
    "overview": "The sequel to the 1988 horror film.",
    "release_date": "1991-03-02",
    "vote_average": 5.5,
    "runtime": 71,
    "genre_ids": [
      27,
      53
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 287,
    "title": "Door III",
    "poster_path": "https://theposterdb.com/api/assets/552186/view",
    "backdrop_path": "https://theposterdb.com/api/assets/552186/view",
    "overview": "The third installment in the \"Door\" horror series.",
    "release_date": "1996-03-02",
    "vote_average": 5,
    "runtime": 90,
    "genre_ids": [
      27,
      53
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 288,
    "title": "Doppelganger",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/80/7h/am/qp/doppel-1200-1200-675-675-crop-000000.jpg?v=a1bd41e13a",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/80/7h/am/qp/doppel-1200-1200-675-675-crop-000000.jpg?v=a1bd41e13a",
    "overview": "A man's life is turned upside down when he meets his doppelgänger.",
    "release_date": "2003-09-27",
    "vote_average": 6.5,
    "runtime": 107,
    "genre_ids": [
      35,
      18,
      9648,
      878
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 9648,
        "name": "Mistério"
      },
      {
        "id": 878,
        "name": "Ficção científica"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 289,
    "title": "Doubt",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/7y/ic/qi/bz/doubt-1200-1200-675-675-crop-000000.jpg?v=f7f6ea9c49",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/7y/ic/qi/bz/doubt-1200-1200-675-675-crop-000000.jpg?v=f7f6ea9c49",
    "overview": "A Catholic school principal questions a priest's ambiguous relationship with a troubled young student.",
    "release_date": "2008-12-12",
    "vote_average": 7.4,
    "runtime": 104,
    "genre_ids": [
      18,
      9648
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 9648,
        "name": "Mistério"
      }
    ],
    "tagline": "There is no evidence. There are no witnesses. But for one woman, there is no doubt.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 290,
    "title": "Dragon Princess",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/7/3/1/7/3/73173-dragon-princess-0-230-0-345-crop.jpg?v=b3145e2a6b",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/7/3/1/7/3/73173-dragon-princess-0-230-0-345-crop.jpg?v=b3145e2a6b",
    "overview": "A female martial artist seeks revenge for the murder of her father.",
    "release_date": "1976-01-31",
    "vote_average": 6.5,
    "runtime": 75,
    "genre_ids": [
      28
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 291,
    "title": "Dream Deceivers: The Story Behind James Vance vs. Judas Priest",
    "poster_path": "https://theposterdb.com/api/assets/245846/view",
    "backdrop_path": "https://theposterdb.com/api/assets/245846/view",
    "overview": "A documentary about the trial of the band Judas Priest, who were accused of embedding subliminal messages in their music.",
    "release_date": "1992-08-01",
    "vote_average": 7,
    "runtime": 58,
    "genre_ids": [
      99,
      10402
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      },
      {
        "id": 10402,
        "name": "Música"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 292,
    "title": "Dream Lovers",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/2/6/7/8/3/126783-dream-lovers-0-230-0-345-crop.jpg?v=ab7a87ad88",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/1/2/6/7/8/3/126783-dream-lovers-0-230-0-345-crop.jpg?v=ab7a87ad88",
    "overview": "Two people who have never met share the same dreams.",
    "release_date": "1986-04-25",
    "vote_average": 6.5,
    "runtime": 93,
    "genre_ids": [
      18,
      10749,
      9648
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 9648,
        "name": "Mistério"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 293,
    "title": "Dream Scenario",
    "poster_path": "https://theposterdb.com/api/assets/446162/view",
    "backdrop_path": "https://theposterdb.com/api/assets/446162/view",
    "overview": "A college professor becomes an overnight celebrity after he starts appearing in people's dreams.",
    "release_date": "2023-11-10",
    "vote_average": 7,
    "runtime": 102,
    "genre_ids": [
      35,
      14
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 14,
        "name": "Fantasia"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 294,
    "title": "Drop",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/41/wq/zq/1w/drop-1200-1200-675-675-crop-000000.jpg?v=fe5d6ec2a7",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/41/wq/zq/1w/drop-1200-1200-675-675-crop-000000.jpg?v=fe5d6ec2a7",
    "overview": "A thriller with a plot that is being kept under wraps.",
    "release_date": "2025-04-11",
    "vote_average": 6.5,
    "runtime": 110,
    "genre_ids": [
      53,
      27
    ],
    "genres": [
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 27,
        "name": "Terror"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 295,
    "title": "Drop Dead Gorgeous",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/sh/yq/ii/mh/drop-dead-gorgeous-1200-1200-675-675-crop-000000.jpg?v=afe4534abd",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/sh/yq/ii/mh/drop-dead-gorgeous-1200-1200-675-675-crop-000000.jpg?v=afe4534abd",
    "overview": "A mockumentary about a small-town beauty pageant where the contestants start dying in mysterious accidents.",
    "release_date": "1999-07-23",
    "vote_average": 6.8,
    "runtime": 97,
    "genre_ids": [
      35,
      53
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "The competition is killer.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 296,
    "title": "Drugstore Cowboy",
    "poster_path": "https://theposterdb.com/api/assets/544646/view",
    "backdrop_path": "https://theposterdb.com/api/assets/544646/view",
    "overview": "A group of drug addicts in the 1970s rob pharmacies to support their habit.",
    "release_date": "1989-10-06",
    "vote_average": 7.2,
    "runtime": 102,
    "genre_ids": [
      80,
      18
    ],
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 297,
    "title": "Dumplings",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/6g/qo/eb/fo/3slokOulcZKSdmzWt2aDBanCGGy-1200-1200-675-675-crop-000000.jpg?v=0940283cdc",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/6g/qo/eb/fo/3slokOulcZKSdmzWt2aDBanCGGy-1200-1200-675-675-crop-000000.jpg?v=0940283cdc",
    "overview": "A woman who wants to stay young eats dumplings made from human fetuses.",
    "release_date": "2004-08-19",
    "vote_average": 6.8,
    "runtime": 91,
    "genre_ids": [
      18,
      27
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 27,
        "name": "Terror"
      }
    ],
    "tagline": "The secret to eternal youth.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 298,
    "title": "Dungeons & Dragons: Honor Among Thieves",
    "poster_path": "https://theposterdb.com/api/assets/294889/view",
    "backdrop_path": "https://theposterdb.com/api/assets/294889/view",
    "overview": "A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic.",
    "release_date": "2023-03-31",
    "vote_average": 7.3,
    "runtime": 134,
    "genre_ids": [
      12,
      14,
      35,
      28
    ],
    "genres": [
      {
        "id": 12,
        "name": "Aventura"
      },
      {
        "id": 14,
        "name": "Fantasia"
      },
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 28,
        "name": "Ação"
      }
    ],
    "tagline": "Who needs heroes when you have thieves?",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 299,
    "title": "Early Summer",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/bw/cp/7v/xn/early%20summer-1200-1200-675-675-crop-000000.jpg?v=cac9eceab0",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/bw/cp/7v/xn/early%20summer-1200-1200-675-675-crop-000000.jpg?v=cac9eceab0",
    "overview": "A family tries to find a husband for their daughter.",
    "release_date": "1951-10-03",
    "vote_average": 7.8,
    "runtime": 124,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 300,
    "title": "Eastern Promises",
    "poster_path": "https://theposterdb.com/api/assets/182066/view",
    "backdrop_path": "https://theposterdb.com/api/assets/182066/view",
    "overview": "A Russian-British midwife in London gets caught up in the Russian mafia.",
    "release_date": "2007-09-08",
    "vote_average": 7.3,
    "runtime": 100,
    "genre_ids": [
      80,
      18,
      53
    ],
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "Every sin leaves a mark.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 301,
    "title": "Eaux d'artifice",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Eaux_d%27Artifice_title_card.jpg/1280px-Eaux_d%27Artifice_title_card.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Eaux_d%27Artifice_title_card.jpg/1280px-Eaux_d%27Artifice_title_card.jpg",
    "overview": "An experimental short film by Kenneth Anger.",
    "release_date": "1953-01-01",
    "vote_average": 6.4,
    "runtime": 13,
    "genre_ids": [
      14
    ],
    "genres": [
      {
        "id": 14,
        "name": "Fantasia"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 302,
    "title": "Eccentricities of a Blonde-Haired Girl",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/ko/k5/e7/ht/eccentricies-1200-1200-675-675-crop-000000.jpg?v=010445fd4b",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/ko/k5/e7/ht/eccentricies-1200-1200-675-675-crop-000000.jpg?v=010445fd4b",
    "overview": "A young man falls in love with a beautiful woman.",
    "release_date": "2009-12-03",
    "vote_average": 6.8,
    "runtime": 64,
    "genre_ids": [
      18,
      10749
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 303,
    "title": "El Doctor",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Osvaldo_Rios_at_2014_MIFF.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Osvaldo_Rios_at_2014_MIFF.jpg",
    "overview": "A short film about a doctor.",
    "release_date": "2006-01-01",
    "vote_average": 6,
    "runtime": 10,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 304,
    "title": "Elevator to the Gallows",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/z8/8u/e8/g8/elevator-to-the-gallows-1200-1200-675-675-crop-000000.jpg?v=102fdcb5e5",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/z8/8u/e8/g8/elevator-to-the-gallows-1200-1200-675-675-crop-000000.jpg?v=102fdcb5e5",
    "overview": "A man murders his boss to be with the man's wife, but he gets trapped in an elevator.",
    "release_date": "1958-01-29",
    "vote_average": 7.9,
    "runtime": 91,
    "genre_ids": [
      80,
      18,
      53
    ],
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 305,
    "title": "Elton John: Never Too Late",
    "poster_path": "https://theposterdb.com/api/assets/552014/view",
    "backdrop_path": "https://theposterdb.com/api/assets/552014/view",
    "overview": "A documentary about the life and career of Elton John.",
    "release_date": "2024-01-01",
    "vote_average": 7.8,
    "runtime": 125,
    "genre_ids": [
      99,
      10402
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      },
      {
        "id": 10402,
        "name": "Música"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 306,
    "title": "Emilia Pérez",
    "poster_path": "https://theposterdb.com/api/assets/543362/view",
    "backdrop_path": "https://theposterdb.com/api/assets/543362/view",
    "overview": "A lawyer is hired by a Mexican drug lord to help him undergo gender reassignment surgery.",
    "release_date": "2024-08-28",
    "vote_average": 7.8,
    "runtime": 130,
    "genre_ids": [
      35,
      80,
      10402
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 10402,
        "name": "Música"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 307,
    "title": "Emperor Tomato Ketchup",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/nc/y5/bp/o0/emperorr-1200-1200-675-675-crop-000000.jpg?v=cda1639b6b",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/nc/y5/bp/o0/emperorr-1200-1200-675-675-crop-000000.jpg?v=cda1639b6b",
    "overview": "A surreal and controversial film about a world ruled by children.",
    "release_date": "1971-04-24",
    "vote_average": 6,
    "runtime": 75,
    "genre_ids": [
      14,
      18
    ],
    "genres": [
      {
        "id": 14,
        "name": "Fantasia"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 308,
    "title": "Encounters of the Spooky Kind",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/xx/c9/qe/g8/tcq2oF6gFFtqjsenPHrO6cxv1rV-1200-1200-675-675-crop-000000.jpg?v=d728ca36ec",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/xx/c9/qe/g8/tcq2oF6gFFtqjsenPHrO6cxv1rV-1200-1200-675-675-crop-000000.jpg?v=d728ca36ec",
    "overview": "A man who is known for his courage is hired to spend a night in a haunted house.",
    "release_date": "1980-12-24",
    "vote_average": 7.1,
    "runtime": 102,
    "genre_ids": [
      28,
      35,
      27
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 27,
        "name": "Terror"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 309,
    "title": "Então Morri",
    "poster_path": "https://picsum.photos/seed/309/500/750",
    "backdrop_path": "https://picsum.photos/seed/bp309/1280/720",
    "overview": "A documentary about a woman who faked her own death.",
    "release_date": "2016-01-01",
    "vote_average": 7,
    "runtime": 80,
    "genre_ids": [
      99
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 310,
    "title": "Enter the Void",
    "poster_path": "https://theposterdb.com/api/assets/133202/view",
    "backdrop_path": "https://theposterdb.com/api/assets/133202/view",
    "overview": "A drug dealer in Tokyo is killed and his spirit watches over his sister.",
    "release_date": "2009-05-22",
    "vote_average": 7.1,
    "runtime": 161,
    "genre_ids": [
      18,
      14
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 14,
        "name": "Fantasia"
      }
    ],
    "tagline": "Life is a trip.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 311,
    "title": "Entrei em Pânico ao Saber o Que Vocês Fizeram na Sexta-feira 13 do Verão Passado",
    "poster_path": "https://picsum.photos/seed/311/500/750",
    "backdrop_path": "https://picsum.photos/seed/bp311/1280/720",
    "overview": "A parody of teen slasher films.",
    "release_date": "2001-01-01",
    "vote_average": 5.5,
    "runtime": 90,
    "genre_ids": [
      35,
      27
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 27,
        "name": "Terror"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 312,
    "title": "Epidemic",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/ro/ev/kr/za/dLiEN68i1HgTf2voTzPAtsI1P1m-1200-1200-675-675-crop-000000.jpg?v=ea3db53927",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/ro/ev/kr/za/dLiEN68i1HgTf2voTzPAtsI1P1m-1200-1200-675-675-crop-000000.jpg?v=ea3db53927",
    "overview": "A director and his screenwriter write a film about a plague, and a real plague breaks out.",
    "release_date": "1987-09-11",
    "vote_average": 6.6,
    "runtime": 106,
    "genre_ids": [
      18,
      27
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 27,
        "name": "Terror"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 313,
    "title": "Equation to an Unknown",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/b2/tj/8j/a3/equations-1200-1200-675-675-crop-000000.jpg?v=c7a6e487a3",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/b2/tj/8j/a3/equations-1200-1200-675-675-crop-000000.jpg?v=c7a6e487a3",
    "overview": "A short film about mathematics.",
    "release_date": "1980-01-01",
    "vote_average": 6,
    "runtime": 10,
    "genre_ids": [
      99
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 314,
    "title": "Eros + Massacre",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/zn/h4/3p/pb/eros-1200-1200-675-675-crop-000000.jpg?v=57a831721e",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/zn/h4/3p/pb/eros-1200-1200-675-675-crop-000000.jpg?v=57a831721e",
    "overview": "A film about the life of an anarchist and his relationships with women.",
    "release_date": "1969-03-15",
    "vote_average": 7.2,
    "runtime": 215,
    "genre_ids": [
      18,
      36
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 36,
        "name": "História"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 315,
    "title": "Escape from the 21st Century",
    "poster_path": "https://theposterdb.com/api/assets/628302/view",
    "backdrop_path": "https://theposterdb.com/api/assets/628302/view",
    "overview": "A sci-fi film about a man who escapes from the future.",
    "release_date": "2024-01-01",
    "vote_average": 6,
    "runtime": 90,
    "genre_ids": [
      878
    ],
    "genres": [
      {
        "id": 878,
        "name": "Ficção científica"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 316,
    "title": "Escape to the Silver Globe",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/63/qv/rh/89/kgozbffjPkJ4pKgTzvLVLACPvES-1200-1200-675-675-crop-000000.jpg?v=7e0e4fff82",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/63/qv/rh/89/kgozbffjPkJ4pKgTzvLVLACPvES-1200-1200-675-675-crop-000000.jpg?v=7e0e4fff82",
    "overview": "A documentary about the unfinished Polish sci-fi film \"On the Silver Globe\".",
    "release_date": "2021-01-01",
    "vote_average": 7,
    "runtime": 90,
    "genre_ids": [
      99
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 317,
    "title": "Essential Killing",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/v8/33/qv/nd/aBoC043gD23hQZH8bpiQtCfzxBT-1200-1200-675-675-crop-000000.jpg?v=674c80af3c",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/v8/33/qv/nd/aBoC043gD23hQZH8bpiQtCfzxBT-1200-1200-675-675-crop-000000.jpg?v=674c80af3c",
    "overview": "An escaped Taliban fighter tries to survive in the European wilderness.",
    "release_date": "2010-09-06",
    "vote_average": 6.3,
    "runtime": 83,
    "genre_ids": [
      53,
      18
    ],
    "genres": [
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 318,
    "title": "Eternity and a Day",
    "poster_path": "https://theposterdb.com/api/assets/640741/view",
    "backdrop_path": "https://theposterdb.com/api/assets/640741/view",
    "overview": "A dying writer reflects on his life and his past loves.",
    "release_date": "1998-05-23",
    "vote_average": 7.7,
    "runtime": 137,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 319,
    "title": "Europa",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/dy/5o/kb/17/europa-1200-1200-675-675-crop-000000.jpg?v=bc5b178bef",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/dy/5o/kb/17/europa-1200-1200-675-675-crop-000000.jpg?v=bc5b178bef",
    "overview": "An American travels to Germany after World War II and gets a job as a train conductor.",
    "release_date": "1991-05-12",
    "vote_average": 7.3,
    "runtime": 112,
    "genre_ids": [
      18,
      53,
      10752
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 10752,
        "name": "Guerra"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 320,
    "title": "Evil Does Not Exist",
    "poster_path": "https://theposterdb.com/api/assets/546457/view",
    "backdrop_path": "https://theposterdb.com/api/assets/546457/view",
    "overview": "A company plans to build a glamping site in a small Japanese village, but the locals are opposed to it.",
    "release_date": "2023-09-04",
    "vote_average": 7.1,
    "runtime": 106,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 321,
    "title": "Evil Under the Sun",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/gv/z7/u9/p0/9DX2jyyYoFnKdNmqNER2ufFEMpF-1200-1200-675-675-crop-000000.jpg?v=b3a295a0cb",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/gv/z7/u9/p0/9DX2jyyYoFnKdNmqNER2ufFEMpF-1200-1200-675-675-crop-000000.jpg?v=b3a295a0cb",
    "overview": "Hercule Poirot investigates the murder of a famous actress on a remote island.",
    "release_date": "1982-03-05",
    "vote_average": 7.1,
    "runtime": 117,
    "genre_ids": [
      9648,
      80
    ],
    "genres": [
      {
        "id": 9648,
        "name": "Mistério"
      },
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "tagline": "The ultimate vacation... from life.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 322,
    "title": "Ex Drummer",
    "poster_path": "https://theposterdb.com/api/assets/605780/view",
    "backdrop_path": "https://theposterdb.com/api/assets/605780/view",
    "overview": "A famous writer joins a punk rock band of misfits.",
    "release_date": "2007-01-31",
    "vote_average": 6.9,
    "runtime": 104,
    "genre_ids": [
      35,
      18,
      10402
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10402,
        "name": "Música"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 323,
    "title": "Exhibiting Forgiveness",
    "poster_path": "https://theposterdb.com/api/assets/552504/view",
    "backdrop_path": "https://theposterdb.com/api/assets/552504/view",
    "overview": "A successful artist returns to his hometown to care for his dying mother.",
    "release_date": "2024-01-20",
    "vote_average": 7,
    "runtime": 100,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 324,
    "title": "Exhuma",
    "poster_path": "https://theposterdb.com/api/assets/519098/view",
    "backdrop_path": "https://theposterdb.com/api/assets/519098/view",
    "overview": "Two shamans are hired to investigate a series of mysterious events affecting a wealthy family.",
    "release_date": "2024-02-22",
    "vote_average": 7.5,
    "runtime": 134,
    "genre_ids": [
      27,
      9648,
      53
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 9648,
        "name": "Mistério"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "The forbidden tomb has been opened.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 325,
    "title": "Eyes of the Spider",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/iz/gj/8k/ur/onxKZxbB51oiZOQprNh4ogBRD9N-1200-1200-675-675-crop-000000.jpg?v=33168c3100",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/iz/gj/8k/ur/onxKZxbB51oiZOQprNh4ogBRD9N-1200-1200-675-675-crop-000000.jpg?v=33168c3100",
    "overview": "A man becomes obsessed with a young girl.",
    "release_date": "1998-05-30",
    "vote_average": 6.2,
    "runtime": 85,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 326,
    "title": "Eyes Without a Face",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/1r/f6/gk/0g/eyes-1200-1200-675-675-crop-000000.jpg?v=dfb735f757",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/1r/f6/gk/0g/eyes-1200-1200-675-675-crop-000000.jpg?v=dfb735f757",
    "overview": "A brilliant surgeon goes to extreme lengths to restore his daughter's disfigured face.",
    "release_date": "1960-01-11",
    "vote_average": 7.6,
    "runtime": 90,
    "genre_ids": [
      18,
      27
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 27,
        "name": "Terror"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 327,
    "title": "F1",
    "poster_path": "https://theposterdb.com/api/assets/608277/view",
    "backdrop_path": "https://theposterdb.com/api/assets/608277/view",
    "overview": "A Formula 1 movie starring Brad Pitt.",
    "release_date": "2025-06-25",
    "vote_average": 7.1,
    "runtime": 128,
    "genre_ids": [
      28,
      12,
      18
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 12,
        "name": "Aventura"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 328,
    "title": "Fabricating Tom Zé",
    "poster_path": "https://picsum.photos/seed/328/500/750",
    "backdrop_path": "https://picsum.photos/seed/bp328/1280/720",
    "overview": "A documentary about the life and music of Brazilian musician Tom Zé.",
    "release_date": "2006-03-24",
    "vote_average": 7.5,
    "runtime": 88,
    "genre_ids": [
      99,
      10402
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      },
      {
        "id": 10402,
        "name": "Música"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 329,
    "title": "Fail Safe",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/9i/s5/i4/7d/fail-1200-1200-675-675-crop-000000.jpg?v=ef4a5ee14f",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/9i/s5/i4/7d/fail-1200-1200-675-675-crop-000000.jpg?v=ef4a5ee14f",
    "overview": "A group of American bombers are accidentally ordered to drop nuclear bombs on Moscow.",
    "release_date": "1964-10-07",
    "vote_average": 7.9,
    "runtime": 112,
    "genre_ids": [
      18,
      53,
      10752
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 10752,
        "name": "Guerra"
      }
    ],
    "tagline": "It will have you sitting on the brink of eternity.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 330,
    "title": "Fallen Angels",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/mr/p7/cy/5h/fallen-angels-1200-1200-675-675-crop-000000.jpg?v=b79bc8eb91",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/mr/p7/cy/5h/fallen-angels-1200-1200-675-675-crop-000000.jpg?v=b79bc8eb91",
    "overview": "A series of interconnected stories about lonely people in Hong Kong.",
    "release_date": "1995-09-06",
    "vote_average": 7.6,
    "runtime": 99,
    "genre_ids": [
      80,
      35,
      18,
      10749
    ],
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 331,
    "title": "Fallen Leaves",
    "poster_path": "https://theposterdb.com/api/assets/434526/view",
    "backdrop_path": "https://theposterdb.com/api/assets/434526/view",
    "overview": "Two lonely people in Helsinki meet and try to find love.",
    "release_date": "2023-09-14",
    "vote_average": 7.4,
    "runtime": 81,
    "genre_ids": [
      35,
      18,
      10749
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 332,
    "title": "Fancy Dance",
    "poster_path": "https://theposterdb.com/api/assets/497862/view",
    "backdrop_path": "https://theposterdb.com/api/assets/497862/view",
    "overview": "A Native American woman searches for her missing sister.",
    "release_date": "2023-01-20",
    "vote_average": 7,
    "runtime": 90,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 333,
    "title": "Farewell My Concubine",
    "poster_path": "https://theposterdb.com/api/assets/211443/view",
    "backdrop_path": "https://theposterdb.com/api/assets/211443/view",
    "overview": "The story of two Peking opera singers and their tumultuous relationship.",
    "release_date": "1993-01-01",
    "vote_average": 8.1,
    "runtime": 171,
    "genre_ids": [
      18,
      10749
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 334,
    "title": "Fargo",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/ww/kz/nd/19/fargo-1200-1200-675-675-crop-000000.jpg?v=683482948f",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/ww/kz/nd/19/fargo-1200-1200-675-675-crop-000000.jpg?v=683482948f",
    "overview": "A car salesman in Minnesota has his wife kidnapped and things go horribly wrong.",
    "release_date": "1996-03-08",
    "vote_average": 7.9,
    "runtime": 98,
    "genre_ids": [
      80,
      18,
      53
    ],
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "A lot can happen in the middle of nowhere.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 335,
    "title": "Faust: Love of the Damned",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/rk/j9/56/je/faust-1200-1200-675-675-crop-000000.jpg?v=d46706172b",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/rk/j9/56/je/faust-1200-1200-675-675-crop-000000.jpg?v=d46706172b",
    "overview": "A man sells his soul to the devil to avenge his girlfriend's death.",
    "release_date": "2000-07-01",
    "vote_average": 5.5,
    "runtime": 98,
    "genre_ids": [
      27,
      28,
      14
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 14,
        "name": "Fantasia"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 336,
    "title": "Fazil",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/d/db/Fazil_%28film%29_poster.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/d/db/Fazil_%28film%29_poster.jpg",
    "overview": "A silent film about a prince who falls in love with a dancing girl.",
    "release_date": "1928-06-04",
    "vote_average": 6,
    "runtime": 90,
    "genre_ids": [
      18,
      10749
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 337,
    "title": "Fear City",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/v8/ea/uf/9y/fear-city-1200-1200-675-675-crop-000000.jpg?v=25cfa68a32",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/v8/ea/uf/9y/fear-city-1200-1200-675-675-crop-000000.jpg?v=25cfa68a32",
    "overview": "A martial artist who is afraid of fighting must confront his fears when a killer starts targeting strippers.",
    "release_date": "1984-05-18",
    "vote_average": 5.7,
    "runtime": 95,
    "genre_ids": [
      28,
      53,
      80
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 80,
        "name": "Crime"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 338,
    "title": "Fear No Evil",
    "poster_path": "https://theposterdb.com/api/assets/180634/view",
    "backdrop_path": "https://theposterdb.com/api/assets/180634/view",
    "overview": "A young man who is the Antichrist must be stopped.",
    "release_date": "1981-01-30",
    "vote_average": 5.4,
    "runtime": 99,
    "genre_ids": [
      27
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 339,
    "title": "Female Perversions",
    "poster_path": "https://theposterdb.com/api/assets/600816/view",
    "backdrop_path": "https://theposterdb.com/api/assets/600816/view",
    "overview": "A successful lawyer struggles with her sexuality and her relationships.",
    "release_date": "1996-01-22",
    "vote_average": 5.8,
    "runtime": 119,
    "genre_ids": [
      18,
      53
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 340,
    "title": "Female Prisoner #701: Scorpion",
    "poster_path": "https://theposterdb.com/api/assets/267639/view",
    "backdrop_path": "https://theposterdb.com/api/assets/267639/view",
    "overview": "A woman who is betrayed by her lover and sent to prison seeks revenge.",
    "release_date": "1972-08-25",
    "vote_average": 7.2,
    "runtime": 87,
    "genre_ids": [
      28,
      80,
      53
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 341,
    "title": "Female Prisoner Scorpion: Beast Stable",
    "poster_path": "https://theposterdb.com/api/assets/634833/view",
    "backdrop_path": "https://theposterdb.com/api/assets/634833/view",
    "overview": "The sequel to the 1972 film.",
    "release_date": "1973-07-29",
    "vote_average": 7,
    "runtime": 87,
    "genre_ids": [
      28,
      80,
      53
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 342,
    "title": "Fernanda Young: Beyond My Control",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/1/1/4/6/1/7/9/1146179-fernanda-young-foge-me-ao-controle-0-230-0-345-crop.jpg?v=06088f93a7",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/1/1/4/6/1/7/9/1146179-fernanda-young-foge-me-ao-controle-0-230-0-345-crop.jpg?v=06088f93a7",
    "overview": "A documentary about the life and work of Brazilian writer Fernanda Young.",
    "release_date": "2024-01-01",
    "vote_average": 7,
    "runtime": 90,
    "genre_ids": [
      99
    ],
    "genres": [
      {
        "id": 99,
        "name": "Documentário"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 343,
    "title": "Fiddler on the Roof",
    "poster_path": "https://theposterdb.com/api/assets/279289/view",
    "backdrop_path": "https://theposterdb.com/api/assets/279289/view",
    "overview": "A poor Jewish milkman in pre-revolutionary Russia tries to marry off his five daughters.",
    "release_date": "1971-11-03",
    "vote_average": 7.7,
    "runtime": 181,
    "genre_ids": [
      18,
      10749,
      10402
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 10402,
        "name": "Música"
      }
    ],
    "tagline": "To life!",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 344,
    "title": "Fidelity",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/8x/eq/0p/40/fidelity-1200-1200-675-675-crop-000000.jpg?v=dfe208de1f",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/8x/eq/0p/40/fidelity-1200-1200-675-675-crop-000000.jpg?v=dfe208de1f",
    "overview": "A woman who is married to a kind and loving man finds herself drawn to a dangerous photographer.",
    "release_date": "2000-04-05",
    "vote_average": 5.7,
    "runtime": 165,
    "genre_ids": [
      18,
      10749
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 345,
    "title": "Fingernails",
    "poster_path": "https://theposterdb.com/api/assets/414668/view",
    "backdrop_path": "https://theposterdb.com/api/assets/414668/view",
    "overview": "In a world where a test can determine if a couple is truly in love, a woman who is in a long-term relationship starts to have doubts.",
    "release_date": "2023-11-03",
    "vote_average": 6.2,
    "runtime": 113,
    "genre_ids": [
      18,
      10749,
      878
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 878,
        "name": "Ficção científica"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 346,
    "title": "Fire (Pożar)",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Remains_of_night_club_in_Kochani_after_the_fire_VOA-full.jpg/1280px-Remains_of_night_club_in_Kochani_after_the_fire_VOA-full.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Remains_of_night_club_in_Kochani_after_the_fire_VOA-full.jpg/1280px-Remains_of_night_club_in_Kochani_after_the_fire_VOA-full.jpg",
    "overview": "An animated short film by David Lynch.",
    "release_date": "2015-01-01",
    "vote_average": 6,
    "runtime": 10,
    "genre_ids": [
      16
    ],
    "genres": [
      {
        "id": 16,
        "name": "Animação"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 347,
    "title": "Firebrand",
    "poster_path": "https://theposterdb.com/api/assets/505935/view",
    "backdrop_path": "https://theposterdb.com/api/assets/505935/view",
    "overview": "The story of Katherine Parr, the sixth and final wife of King Henry VIII.",
    "release_date": "2023-05-21",
    "vote_average": 6.5,
    "runtime": 120,
    "genre_ids": [
      18,
      36
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 36,
        "name": "História"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 348,
    "title": "Fireworks",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/ni/gk/ih/sw/5gM6mfgM0szwrUYpRcNQUukUOPx-1200-1200-675-675-crop-000000.jpg?v=18532de097",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/ni/gk/ih/sw/5gM6mfgM0szwrUYpRcNQUukUOPx-1200-1200-675-675-crop-000000.jpg?v=18532de097",
    "overview": "An experimental short film by Kenneth Anger.",
    "release_date": "1947-01-01",
    "vote_average": 6.7,
    "runtime": 15,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 349,
    "title": "Fireworks (1997)",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/e7/px/wy/g2/fireworks-1997-1200-1200-675-675-crop-000000.jpg?v=95239639e2",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/e7/px/wy/g2/fireworks-1997-1200-1200-675-675-crop-000000.jpg?v=95239639e2",
    "overview": "A violent and nihilistic film about a detective who takes on the yakuza.",
    "release_date": "1997-09-06",
    "vote_average": 7.5,
    "runtime": 103,
    "genre_ids": [
      80,
      18,
      53
    ],
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 350,
    "title": "First Love",
    "poster_path": "https://theposterdb.com/api/assets/462017/view",
    "backdrop_path": "https://theposterdb.com/api/assets/462017/view",
    "overview": "A story of first love between two teenagers.",
    "release_date": "1970-11-26",
    "vote_average": 6.8,
    "runtime": 93,
    "genre_ids": [
      18,
      10749
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 351,
    "title": "First Love (2019)",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/ab/g5/5c/rq/first%20love-1200-1200-675-675-crop-000000.jpg?v=7ffd9d275a",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/ab/g5/5c/rq/first%20love-1200-1200-675-675-crop-000000.jpg?v=7ffd9d275a",
    "overview": "A young boxer and a call girl get caught up in a drug-smuggling scheme over the course of one night in Tokyo.",
    "release_date": "2019-05-17",
    "vote_average": 7,
    "runtime": 108,
    "genre_ids": [
      28,
      35,
      80,
      10749
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 352,
    "title": "Fish Story",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/81/yd/9i/tn/AejrZJdLSLREu1dbIjjEa8sQOtj-1200-1200-675-675-crop-000000.jpg?v=440cd212de",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/81/yd/9i/tn/AejrZJdLSLREu1dbIjjEa8sQOtj-1200-1200-675-675-crop-000000.jpg?v=440cd212de",
    "overview": "A series of seemingly unrelated events are connected by a punk rock song.",
    "release_date": "2009-03-20",
    "vote_average": 7.3,
    "runtime": 112,
    "genre_ids": [
      35,
      18,
      10402
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10402,
        "name": "Música"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 353,
    "title": "Fist of Legend",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/8k/q1/zi/8o/fists-1200-1200-675-675-crop-000000.jpg?v=c37ba2bf9d",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/8k/q1/zi/8o/fists-1200-1200-675-675-crop-000000.jpg?v=c37ba2bf9d",
    "overview": "A martial artist returns to Shanghai to avenge his master's death.",
    "release_date": "1994-12-22",
    "vote_average": 7.5,
    "runtime": 103,
    "genre_ids": [
      28,
      18
    ],
    "genres": [
      {
        "id": 28,
        "name": "Ação"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 354,
    "title": "Fitzcarraldo",
    "poster_path": "https://theposterdb.com/api/assets/194161/view",
    "backdrop_path": "https://theposterdb.com/api/assets/194161/view",
    "overview": "An opera-loving madman is determined to build an opera house in the middle of the Amazon jungle.",
    "release_date": "1982-03-04",
    "vote_average": 7.8,
    "runtime": 158,
    "genre_ids": [
      12,
      18,
      10402
    ],
    "genres": [
      {
        "id": 12,
        "name": "Aventura"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10402,
        "name": "Música"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 355,
    "title": "Five",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/9/8/5/8/0/98580-five-dedicated-to-ozu-0-230-0-345-crop.jpg?v=2d3503f8ec",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/9/8/5/8/0/98580-five-dedicated-to-ozu-0-230-0-345-crop.jpg?v=2d3503f8ec",
    "overview": "A short film about five women.",
    "release_date": "2003-01-01",
    "vote_average": 6.5,
    "runtime": 15,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 356,
    "title": "Five and the Skin",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/2/0/7/5/9/8/207598-five-and-the-skin-0-230-0-345-crop.jpg?v=e078f9055c",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/2/0/7/5/9/8/207598-five-and-the-skin-0-230-0-345-crop.jpg?v=e078f9055c",
    "overview": "A man's obsession with a woman leads him down a dark and twisted path.",
    "release_date": "1982-01-01",
    "vote_average": 6,
    "runtime": 90,
    "genre_ids": [
      18,
      53
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 357,
    "title": "Five Centimetres per Second",
    "poster_path": "https://picsum.photos/seed/357/500/750",
    "backdrop_path": "https://picsum.photos/seed/bp357/1280/720",
    "overview": "A story of two people who are separated by distance and time.",
    "release_date": "2007-03-03",
    "vote_average": 7.3,
    "runtime": 63,
    "genre_ids": [
      16,
      18,
      10749
    ],
    "genres": [
      {
        "id": 16,
        "name": "Animação"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 358,
    "title": "Flanders",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/2/8/1/5/0/28150-flanders-0-230-0-345-crop.jpg?v=85bd2ce797",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/2/8/1/5/0/28150-flanders-0-230-0-345-crop.jpg?v=85bd2ce797",
    "overview": "A young man goes off to war, leaving behind his girlfriend.",
    "release_date": "2006-09-27",
    "vote_average": 6.4,
    "runtime": 91,
    "genre_ids": [
      18,
      10752
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10752,
        "name": "Guerra"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 359,
    "title": "Flesh",
    "poster_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flesh_%281968%29_Joe_Dallesandro_and_Louis_Waldon_%281200_dpi%29.jpg/1280px-Flesh_%281968%29_Joe_Dallesandro_and_Louis_Waldon_%281200_dpi%29.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flesh_%281968%29_Joe_Dallesandro_and_Louis_Waldon_%281200_dpi%29.jpg/1280px-Flesh_%281968%29_Joe_Dallesandro_and_Louis_Waldon_%281200_dpi%29.jpg",
    "overview": "A young male prostitute in New York City tries to survive on the streets.",
    "release_date": "1968-09-26",
    "vote_average": 6.4,
    "runtime": 105,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 360,
    "title": "Flesh for Frankenstein",
    "poster_path": "https://theposterdb.com/api/assets/93789/view",
    "backdrop_path": "https://theposterdb.com/api/assets/93789/view",
    "overview": "A mad scientist tries to create a new master race.",
    "release_date": "1973-11-30",
    "vote_average": 6.1,
    "runtime": 95,
    "genre_ids": [
      27,
      878,
      35
    ],
    "genres": [
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 878,
        "name": "Ficção científica"
      },
      {
        "id": 35,
        "name": "Comédia"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 361,
    "title": "Floating Clouds",
    "poster_path": "https://theposterdb.com/api/assets/388061/view",
    "backdrop_path": "https://theposterdb.com/api/assets/388061/view",
    "overview": "A woman returns to Japan after World War II and tries to rekindle her relationship with her former lover.",
    "release_date": "1955-01-15",
    "vote_average": 7.6,
    "runtime": 123,
    "genre_ids": [
      18,
      10749
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 362,
    "title": "Floating Weeds",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/3p/pj/jc/fm/floating-1200-1200-675-675-crop-000000.jpg?v=9d7b8bf542",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/3p/pj/jc/fm/floating-1200-1200-675-675-crop-000000.jpg?v=9d7b8bf542",
    "overview": "A traveling theater troupe arrives in a small seaside town.",
    "release_date": "1959-11-17",
    "vote_average": 8,
    "runtime": 119,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 363,
    "title": "Flow",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/xl/29/a9/xh/Flow-1200-1200-675-675-crop-000000.jpg?v=9f04435233",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/xl/29/a9/xh/Flow-1200-1200-675-675-crop-000000.jpg?v=9f04435233",
    "overview": "An animated film about a cat who must learn to survive in a flooded world.",
    "release_date": "2024-05-22",
    "vote_average": 7.5,
    "runtime": 85,
    "genre_ids": [
      16,
      12,
      18
    ],
    "genres": [
      {
        "id": 16,
        "name": "Animação"
      },
      {
        "id": 12,
        "name": "Aventura"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 364,
    "title": "Flower of Shanghai",
    "poster_path": "https://theposterdb.com/api/assets/153876/view",
    "backdrop_path": "https://theposterdb.com/api/assets/153876/view",
    "overview": "A beautiful and melancholic film about the lives of courtesans in 19th-century Shanghai.",
    "release_date": "1998-10-02",
    "vote_average": 7.4,
    "runtime": 113,
    "genre_ids": [
      18,
      10749
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 365,
    "title": "Flux Gourmet",
    "poster_path": "https://theposterdb.com/api/assets/244824/view",
    "backdrop_path": "https://theposterdb.com/api/assets/244824/view",
    "overview": "A bizarre and surreal film about a \"sonic catering\" institute.",
    "release_date": "2022-06-24",
    "vote_average": 6.3,
    "runtime": 111,
    "genre_ids": [
      35,
      18,
      27
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 27,
        "name": "Terror"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 366,
    "title": "Fly Me to the Moon",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/br/h5/ni/0k/flu%20me-1200-1200-675-675-crop-000000.jpg?v=55f1f6d79b",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/br/h5/ni/0k/flu%20me-1200-1200-675-675-crop-000000.jpg?v=55f1f6d79b",
    "overview": "A romantic comedy set against the backdrop of the 1969 moon landing.",
    "release_date": "2024-07-12",
    "vote_average": 6.8,
    "runtime": 132,
    "genre_ids": [
      35,
      10749
    ],
    "genres": [
      {
        "id": 35,
        "name": "Comédia"
      },
      {
        "id": 10749,
        "name": "Romance"
      }
    ],
    "tagline": "The historic mission to the moon was a success. But the real challenge was faking it.",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 367,
    "title": "Follow the Light",
    "poster_path": "https://a.ltrbxd.com/resized/film-poster/8/4/2/7/1/6/842716-follow-the-light-0-230-0-345-crop.jpg?v=916d642adb",
    "backdrop_path": "https://a.ltrbxd.com/resized/film-poster/8/4/2/7/1/6/842716-follow-the-light-0-230-0-345-crop.jpg?v=916d642adb",
    "overview": "A young boy in a small Japanese town becomes obsessed with a mysterious light.",
    "release_date": "2021-06-18",
    "vote_average": 6.5,
    "runtime": 104,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 368,
    "title": "For a Few Dollars More",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/9k/y1/6f/j7/8tbWZYvniZcjFZEX4XiCjrbHgl4-1200-1200-675-675-crop-000000.jpg?v=63cce732f7",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/9k/y1/6f/j7/8tbWZYvniZcjFZEX4XiCjrbHgl4-1200-1200-675-675-crop-000000.jpg?v=63cce732f7",
    "overview": "Two bounty hunters team up to track down a ruthless bandit.",
    "release_date": "1965-12-18",
    "vote_average": 8,
    "runtime": 132,
    "genre_ids": [
      37
    ],
    "genres": [
      {
        "id": 37,
        "name": "Faroeste"
      }
    ],
    "tagline": "The man with no name is back... The man in black is waiting... a walking arsenal - he's the deadliest man in the west!",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 369,
    "title": "For Ever Mozart",
    "poster_path": "https://a.ltrbxd.com/resized/sm/upload/f4/wn/51/b6/for%20ever-1200-1200-675-675-crop-000000.jpg?v=54b5f14bf3",
    "backdrop_path": "https://a.ltrbxd.com/resized/sm/upload/f4/wn/51/b6/for%20ever-1200-1200-675-675-crop-000000.jpg?v=54b5f14bf3",
    "overview": "A group of filmmakers try to make a movie in war-torn Sarajevo.",
    "release_date": "1996-09-05",
    "vote_average": 6.5,
    "runtime": 84,
    "genre_ids": [
      18
    ],
    "genres": [
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  },
  {
    "id": 370,
    "title": "Force of Evil",
    "poster_path": "https://theposterdb.com/api/assets/237047/view",
    "backdrop_path": "https://theposterdb.com/api/assets/237047/view",
    "overview": "A lawyer working for a powerful mobster tries to protect his brother from the criminal underworld.",
    "release_date": "1948-12-25",
    "vote_average": 7.2,
    "runtime": 78,
    "genre_ids": [
      80,
      18,
      53
    ],
    "genres": [
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "tagline": "",
    "videos": {
      "results": []
    },
    "trailer_url": null
  }
];
