type Movie = {
  key: number;
  title: string;
  year: number;
  imageUrl: string;
}

interface PopularMovie extends Movie {
  rating: number;
  genre: [string, string];
}

interface LatestMovie extends PopularMovie {
  quality: '720p' | '1080p' | '4K';
}

export const latestMovies: LatestMovie[] = [
  {
    key: 1,
    imageUrl:
          'https://res.cloudinary.com/dt9ntq5vr/image/upload/w_500,h_750/v1592873270/yts-clone/posters/nj5HmHRZsrYQEYYXyAusFv35erP_v32uo1.jpg',
    rating: 7.9,
    genre: ['Action', 'Comedy'],
    title: "The King's Man",
    year: 2021,
    quality: '1080p',
  },
  {
    key: 2,
    imageUrl:
          'https://res.cloudinary.com/dt9ntq5vr/image/upload/w_500,h_750/v1592873316/yts-clone/posters/u0PhyuslumkTuqwFNfN3CQ2cuQw_orqsti.jpg',
    rating: 8.6,
    genre: ['Drama', 'Comedy'],
    title: 'The French Dispatch',
    year: 2021,
    quality: '720p',
  },
  {
    key: 3,
    imageUrl:
          'https://res.cloudinary.com/dt9ntq5vr/image/upload/w_500,h_750/v1592871416/yts-clone/posters/mbm8k3GFhXS0ROd9AD1gqYbIFbM_fuf5fr.jpg',
    rating: 8,
    genre: ['Drama', 'Crime'],
    title: 'The Irishman',
    year: 2019,
    quality: '1080p',
  },
  {
    key: 4,
    imageUrl:
          'https://res.cloudinary.com/dt9ntq5vr/image/upload/w_500,h_750/v1592872721/yts-clone/posters/3fBWD5wqAsbUCvCc5YUTqdYs54v_jcqs1n.jpg',
    rating: 7.9,
    genre: ['Action', 'Thriller'],
    title: 'No Time To Die',
    year: 2021,
    quality: '1080p',
  },
  {
    key: 5,
    imageUrl:
          'https://res.cloudinary.com/dt9ntq5vr/image/upload/w_500,h_750/v1592871962/yts-clone/posters/3nk9UoepYmv1G9oP18q6JJCeYwN_tlfbqd.jpg',
    rating: 7.8,
    genre: ['Horror', 'Thriller'],
    title: 'The Lighthouse',
    year: 2019,
    quality: '1080p',
  },
  {
    key: 6,
    imageUrl:
          'https://res.cloudinary.com/dt9ntq5vr/image/upload/w_500,h_750/v1592871817/yts-clone/posters/udDclJoHjfjb8Ekgsd4FDteOkCU_edz0qx.jpg',
    rating: 8.5,
    genre: ['Drama', 'Crime'],
    title: 'Joker',
    year: 2019,
    quality: '720p',
  },
  {
    key: 7,
    imageUrl:
          'https://res.cloudinary.com/dt9ntq5vr/image/upload/w_500,h_750/v1592871899/yts-clone/posters/iZf0KyrE25z1sage4SYFLCCrMi9_csertk.jpg',
    rating: 8.3,
    genre: ['Drama', 'War'],
    title: '1917',
    year: 2019,
    quality: '1080p',
  },
  {
    key: 8,
    imageUrl:
          'https://res.cloudinary.com/dt9ntq5vr/image/upload/w_500,h_750/v1592873884/yts-clone/posters/4U7hpTK0XTQBKT5X60bKmJd05ha_yitrig.jpg',
    rating: 7.1,
    genre: ['Horror', 'Thriller'],
    title: 'The Invisible Man',
    year: 2020,
    quality: '720p',
  },
];

export const popularMovies: PopularMovie[] = [
  {
    key: 1,
    imageUrl:
          'https://res.cloudinary.com/dt9ntq5vr/image/upload/w_500,h_750/v1592871567/yts-clone/posters/k68nPLbIST6NP96JmTxmZijEvCA_kf8qtn.jpg',
    rating: 8.5,
    genre: ['Action', 'Thriller'],
    title: 'TENET',
    year: 2020,
  },
  {
    key: 2,
    imageUrl:
          'https://res.cloudinary.com/dt9ntq5vr/image/upload/w_500,h_750/v1592872362/yts-clone/posters/xQKNCuiDYxwt7ySzVJ5HZEXxIaw_w7reuc.jpg',
    rating: 8,
    genre: ['Action', 'Adventure'],
    title: 'Wonder Woman 1984',
    year: 2020,
  },
  {
    key: 3,
    imageUrl:
          'https://res.cloudinary.com/dt9ntq5vr/image/upload/w_500,h_750/v1592872513/yts-clone/posters/uAUCHOYwFKQvSRZByP8rCgWKwT_ax3dq5.jpg',
    rating: 8,
    genre: ['Action', 'Adventure'],
    title: 'Black Widow',
    year: 2021,
  },
  {
    key: 4,
    imageUrl:
          'https://res.cloudinary.com/dt9ntq5vr/image/upload/w_500,h_750/v1592872470/yts-clone/posters/4q2hz2m8hubgvijz8Ez0T2Os2Yv_rlsvj9.jpg',
    rating: 7.2,
    genre: ['Horror', 'Thriller'],
    title: 'A Quiet Place Part II',
    year: 2020,
  },
];

export const upcomingMovies: Movie[] = [
  {
    key: 1,
    imageUrl:
          'https://res.cloudinary.com/dt9ntq5vr/image/upload/w_500,h_750/v1592874951/yts-clone/posters/Dune_Twitter_fhqg11.jpg',
    title: 'Dune',
    year: 2021,
  },
  {
    key: 2,
    imageUrl:
          'https://res.cloudinary.com/dt9ntq5vr/image/upload/w_500,h_750/v1592874225/yts-clone/posters/xZNw9xxtwbEf25NYoz52KdbXHPM_taas5v.jpg',
    title: 'The New Mutants',
    year: 2020,
  },
  {
    key: 3,
    imageUrl:
          'https://res.cloudinary.com/dt9ntq5vr/image/upload/w_500,h_750/v1592874469/yts-clone/posters/6z2KsOs8tT4RTwXjHRGVqvLXRb8_powbzg.jpg',
    title: 'Godzilla vs. Kong',
    year: 2021,
  },
  {
    key: 4,
    imageUrl:
          'https://res.cloudinary.com/dt9ntq5vr/image/upload/w_500,h_750/v1592873991/yts-clone/posters/i0FHyNF9VvQTXOi4yKnZJ1zql1_d9fony.jpg',
    title: 'Top Gun: Maverick',
    year: 2021,
  },
];
