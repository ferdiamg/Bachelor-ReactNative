import React from 'react';
import Svg, {
  Circle,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

export default {
  Ble: {
    svg: (
      <G>
        <Path d="M21.13 20.347a1.362 1.362 0 01-.966-.4 4.66 4.66 0 00-3.315-1.373 4.661 4.661 0 00-3.316 1.373 1.365 1.365 0 01-1.931 0 1.365 1.365 0 010-1.931 7.37 7.37 0 015.247-2.173 7.371 7.371 0 015.247 2.173 1.366 1.366 0 010 1.931 1.362 1.362 0 01-.966.4zM26.568 14.907a1.36 1.36 0 01-.966-.4 12.3 12.3 0 00-8.754-3.625 12.3 12.3 0 00-8.754 3.625 1.365 1.365 0 01-1.931 0 1.365 1.365 0 010-1.931 15.013 15.013 0 0110.685-4.425 15.013 15.013 0 0110.685 4.425 1.365 1.365 0 010 1.931 1.359 1.359 0 01-.965.4z" />
        <Path d="M32.337 9.145a1.36 1.36 0 01-.966-.4 20.393 20.393 0 00-14.517-6.013A20.4 20.4 0 002.336 8.745a1.365 1.365 0 01-1.931 0 1.365 1.365 0 010-1.931A23.194 23.194 0 017.799 1.83 23.116 23.116 0 0116.854.001a23.125 23.125 0 019.055 1.829 23.169 23.169 0 017.393 4.985 1.365 1.365 0 010 1.931 1.361 1.361 0 01-.965.399z" />
      </G>
    ),
    viewBox: '0 0 40 40',
  },
  Qr: {
    svg: (
      <G>
        <Path d="M25.525 10.661a1.365 1.365 0 01-1.365-1.365V6.075a3.347 3.347 0 00-3.344-3.343h-3.221a1.365 1.365 0 01-1.365-1.366A1.365 1.365 0 0117.595.001h3.221a6.081 6.081 0 016.074 6.074v3.221a1.365 1.365 0 01-1.365 1.365z" />
        <Path d="M25.525 10.661a1.365 1.365 0 01-1.365-1.365V6.075a3.347 3.347 0 00-3.344-3.343h-3.221a1.365 1.365 0 01-1.365-1.366A1.365 1.365 0 0117.595.001h3.221a6.081 6.081 0 016.074 6.074v3.221a1.365 1.365 0 01-1.365 1.365zM1.365 10.661A1.365 1.365 0 010 9.296V6.075A6.082 6.082 0 016.075 0h3.22a1.365 1.365 0 011.365 1.365 1.365 1.365 0 01-1.365 1.366h-3.22a3.348 3.348 0 00-3.344 3.344v3.221a1.365 1.365 0 01-1.366 1.365zM9.296 26.093H6.075a6.081 6.081 0 01-6.074-6.074v-3.221a1.365 1.365 0 011.365-1.365 1.365 1.365 0 011.365 1.365v3.221a3.347 3.347 0 003.344 3.344h3.221a1.365 1.365 0 011.365 1.365 1.365 1.365 0 01-1.365 1.365z" />
        <Path d="M9.296 26.093H6.075a6.081 6.081 0 01-6.074-6.074v-3.221a1.365 1.365 0 011.365-1.365 1.365 1.365 0 011.365 1.365v3.221a3.347 3.347 0 003.344 3.344h3.221a1.365 1.365 0 011.365 1.365 1.365 1.365 0 01-1.365 1.365zM20.814 26.093h-3.22a1.365 1.365 0 01-1.365-1.365 1.365 1.365 0 011.365-1.365h3.22a3.348 3.348 0 003.344-3.345v-3.22a1.365 1.365 0 011.365-1.365 1.365 1.365 0 011.365 1.365v3.22a6.082 6.082 0 01-6.074 6.075zM14.823 18.304h-2.758a3.885 3.885 0 01-3.88-3.88v-2.758a3.884 3.884 0 013.88-3.88h2.758a3.884 3.884 0 013.88 3.88v2.758a3.885 3.885 0 01-3.88 3.88zm-2.758-7.787a1.151 1.151 0 00-1.149 1.149v2.758a1.15 1.15 0 001.149 1.148h2.758a1.15 1.15 0 001.149-1.148v-2.758a1.151 1.151 0 00-1.149-1.149z" />
      </G>
    ),
    viewBox: '0 0 40 40',
  },
  Logo: {
    svg: (
      <G transform="translate(-4807.928 -2795.29)">
        <Circle cx="33.243" cy="33.243" r="33.243" fill="#fff" transform="translate(4807.928 2795.29)"/>
        <Path fill="#069bff" d="M4836.767 2804.533l-11.794 8.174a7.985 7.985 0 00-3.436 6.563v18.529a7.986 7.986 0 003.436 6.563l11.794 8.174a7.984 7.984 0 009.055.029l11.5-7.866a7.983 7.983 0 003.479-6.592v-19.146a7.984 7.984 0 00-3.479-6.592l-11.5-7.866a7.985 7.985 0 00-9.055.03z"/>
        <Path fill="#fff" d="M4853.915 2818.384l-12.6-8.616-12.883 8.929v19.674l12.883 8.929 12.6-8.616v-5.469l-7.823-4.68 7.823-4.68zm-13.688 7.285v5.73l7.813 4.675-6.707 4.585-7.434-5.152v-13.942l7.434-5.152 6.707 4.585z"/>
      </G>
    ),
    viewBox: '0 0 70 70',
  },
  Logo2: {
    svg: (
      <G>
      <Defs>
        <LinearGradient id="a" x1=".092" x2=".916" y1=".818" y2=".182" gradientUnits="objectBoundingBox">
          <Stop offset='0' stopColor="#0067ff"/>
          <Stop offset='0.174' stopColor="#006fff"/>
          <Stop offset="0.449" stopColor="#0085ff"/>
          <Stop offset="0.789" stopColor="#0af"/>
          <Stop offset="0.896" stopColor="#00b8ff"/>
        </LinearGradient>
        </Defs>
      <G transform="translate(-4807.928 -2795.29)">
        <Circle cx="33.243" cy="33.243" r="33.243" fill="#fff" transform="translate(4807.928 2795.29)"/>
        <Path fill="url(#a)" d="M5005.907 2901.72l-11.794 8.174a7.985 7.985 0 00-3.436 6.563v18.529a7.986 7.986 0 003.436 6.563l11.794 8.174a7.984 7.984 0 009.055.029l11.5-7.866a7.983 7.983 0 003.479-6.592v-19.146a7.984 7.984 0 00-3.479-6.592l-11.5-7.866a7.985 7.985 0 00-9.055.03z" transform="translate(-169.14 -97.187)"/>
        <Path fill="#fff" d="M4853.915 2818.384l-12.6-8.616-12.883 8.929v19.674l12.883 8.929 12.6-8.616v-5.469l-7.823-4.68 7.823-4.68zm-13.688 7.285v5.73l7.813 4.675-6.707 4.585-7.434-5.152v-13.942l7.434-5.152 6.707 4.585z"/>
      </G>
      </G>
    ),
    viewBox: '0 0 70 70',
  },
  Wifi: {
    svg: (
      <G>
        <Path d="M105.621 21.939a1.267 1.267 0 00-.139-.168 74.346 74.346 0 00-105.139 0 1.162 1.162 0 000 1.646l7.689 7.686a1.16 1.16 0 001.641 0 61.082 61.082 0 0186.484 0 1.16 1.16 0 001.641 0l7.688-7.686a1.165 1.165 0 00.139-1.477zm0 0"/>
        <Path d="M52.912 20.33a53.649 53.649 0 00-38.18 15.84 1.16 1.16 0 000 1.641l7.664 7.662a1.16 1.16 0 001.641 0 40.787 40.787 0 0157.746 0 1.162 1.162 0 001.643 0l7.664-7.662a1.16 1.16 0 000-1.641 53.651 53.651 0 00-38.178-15.84zm0 0"/>
        <Path d="M52.909 40.659a33.457 33.457 0 00-23.811 9.881 1.165 1.165 0 000 1.641l7.662 7.662a1.165 1.165 0 001.645 0 20.486 20.486 0 0129.01 0 1.16 1.16 0 001.641 0l7.664-7.662a1.16 1.16 0 000-1.641 33.457 33.457 0 00-23.811-9.881zm0 0M52.911 62.2a11.665 11.665 0 00-8.307 3.439 1.159 1.159 0 000 1.643l7.484 7.486a1.162 1.162 0 001.643 0l7.484-7.486a1.159 1.159 0 000-1.643 11.66 11.66 0 00-8.3-3.439zm0 0"/>
      </G>
    ),
    viewBox: '0 0 120 120',
  },
};