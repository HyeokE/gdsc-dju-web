import Jason from '../../assets/managerProfile/jason.jpeg';
import Blaire from '../../assets/managerProfile/blaire.jpg';
import { IMemberCardType } from '../../types/member';
export const managerData: IMemberCardType[] = [
  {
    nickname: 'Jason',
    name: '정준혁',
    image: Jason,
    position: 'Frontend Developer',
    id: 1,
    role: 'Lead',
    cardText: '',
  },
  {
    nickname: 'Blaire',
    name: '이소희',
    image: Blaire,
    position: 'UX/UI Designer',
    id: 2,
    role: 'Core',
    cardText: '',
  },

  {
    nickname: 'Harry',
    name: '박현기',
    image: 'https://ca.slack-edge.com/T02BE2ERU5A-U02BR888JMT-94c00b918157-512',
    position: 'Android Developer',
    id: 3,
    role: 'Core',
    cardText: '',
  },
  {
    nickname: 'Want',
    name: '정소연',
    image: 'https://ca.slack-edge.com/T02BE2ERU5A-U02CH6KQT8Q-0c56c2e2ad87-512',
    position: 'Backend Developer',
    id: 4,
    role: 'Core',
    cardText: '',
  },
];
