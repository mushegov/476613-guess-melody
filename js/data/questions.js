export default [
  {
    type: `genre`,
    genre: `Инди-рок`,
    tracks: [
      {
        url: `url1`,
        isValid: true,
      },
      {
        url: `url2`,
        isValid: true,
      },
      {
        url: `url3`,
        isValid: true,
      },
      {
        url: `url4`,
        isValid: true,
      },
    ],
  },
  {
    type: `genre`,
    genre: `Рэп`,
    tracks: [
      {
        url: `url`,
        isValid: true,
      },
      {
        url: `url`,
        isValid: true,
      },
      {
        url: `url`,
        isValid: false,
      },
      {
        url: `url`,
        isValid: false,
      },
    ],
  },
  {
    type: `artist`,
    url: `Stan`,
    artists: [
      {
        name: `Eminem`,
        image: `https://placekitten.com/134/134`,
        isValid: true,
      },
      {
        name: `50 Cent`,
        image: `https://placekitten.com/135/135`,
        isValid: false,
      },
      {
        name: `Snoop Dogg`,
        image: `https://placekitten.com/136/136`,
        isValid: false,
      },
    ],
  },
  {
    type: `artist`,
    url: `Faint`,
    artists: [
      {
        name: `KoRn`,
        image: `https://placekitten.com/137/137`,
        isValid: true,
      },
      {
        name: `Limp Bizkit`,
        image: `https://placekitten.com/138/138`,
        isValid: false,
      },
      {
        name: `Linkin Park`,
        image: `https://placekitten.com/139/139`,
        isValid: false,
      },
    ],
  },
];
