 const stays = [
  {
    zones: [
      { id: 1, name: 'testName1' }
    ],
    status: 'actived',
    datetime_start: Date.now(),
    datetime_end: Date.now() - 12,
    duration: 66,
    vehicle_plate: 'АВ-756ук',
    id: '111222',
    amount: 1488,
    periods: [],
    is_suspicious: true,
    photos: []
  },
  {
    zones: [
      { id: 2, name: 'testName2' }
    ],
    status: 'ended',
    datetime_start: Date.now(),
    datetime_end: Date.now() - 25,
    duration: 616,
    vehicle_plate: 'ЫД-156фк',
    id: '2221111',
    amount: 1488,
    periods: [],
    is_suspicious: false,
    photos: []
  }
]

module.exports = stays
