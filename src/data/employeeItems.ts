export interface IEmployee {
  id: number;
  name: string;
  department: string;
  bio: string;
  title: string;
  imgSrc: string;
}

export const employeeItems: IEmployee[] = [
  {
    id: 0,
    name: 'Robert Anderson',
    department: 'Investments',
    bio: 'Robert has a keen eye for innovative tech startups and enjoys mentoring entrepreneurs.',
    title: 'Investment Analyst',
    imgSrc: '/images/employees/robert_anderson.webp',
  },
  {
    id: 1,
    name: 'Jane Smith',
    department: 'Investments',
    bio: 'Jane has over 10 years of experience in venture capital and loves helping startups succeed.',
    title: 'Senior Investment Manager',
    imgSrc: '/images/employees/jane_smith.webp',
  },
  {
    id: 2,
    name: 'Alice Johnson',
    department: 'Operations',
    bio: 'Alice ensures everything runs smoothly at Penny Capital and has a keen eye for detail.',
    title: 'Operations Manager',
    imgSrc: '/images/employees/alice_johnson.webp',
  },
  {
    id: 3,
    name: 'Mary Williams',
    department: 'Legal',
    bio: 'Mary is our legal expert, ensuring all our investments are compliant and secure.',
    title: 'Legal Advisor',
    imgSrc: '/images/employees/mary_williams.webp',
  },
  {
    id: 4,
    name: 'Patricia Brown',
    department: 'Finance',
    bio: 'Patricia keeps our finances in check and has a passion for numbers and spreadsheets.',
    title: 'Finance Manager',
    imgSrc: '/images/employees/patricia_brown.webp',
  },
  {
    id: 5,
    name: 'Linda Davis',
    department: 'Marketing',
    bio: 'Linda helps our portfolio companies get the exposure they need to grow and succeed.',
    title: 'Marketing Specialist',
    imgSrc: '/images/employees/linda_davis.webp',
  },
  {
    id: 6,
    name: 'Barbara Miller',
    department: 'Investments',
    bio: 'Barbara has a knack for spotting promising startups and guiding them to success.',
    title: 'Investment Associate',
    imgSrc: '/images/employees/barbara_miller.webp',
  },
  {
    id: 7,
    name: 'Elizabeth Wilson',
    bio: 'Elizabeth ensures we have the best team possible to support our portfolio companies.',
    title: 'HR Manager',
    department: 'HR',
    imgSrc: '/images/employees/elizabeth_wilson.webp',
  },
  {
    id: 8,
    name: 'James Moore',
    department: 'Investments',
    bio: 'James brings a wealth of experience in tech startups to the Penny Capital team.',
    title: 'Investment Analyst',
    imgSrc: '/images/employees/james_moore.webp',
  },
  {
    id: 9,
    name: 'John Taylor',
    department: 'IT',
    bio: 'John ensures our IT systems are secure and efficient, supporting our day-to-day operations.',
    title: 'IT Manager',
    imgSrc: '/images/employees/john_taylor.webp',
  },
];
