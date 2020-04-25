module.exports =  {
  overview: {
    securityIssuesResolved: 5,
    inspectionCoverage: [
      { coverage: '20/50', entity: 'Databases' },
      { coverage: '20/50', entity: 'Tables' },
      { coverage: '129/7853', entity: 'Files' },
    ],
    sensitiveDataLocations: [
      { entity: 'Data Sources', amount: 3 },
      { entity: 'Databases', amount: 5 },
      { entity: 'Tables', amount: 8 },
      { entity: 'Files', amount: 7 },
    ],
  },
  notifications: [
    {
      title: 'Security Threat',
      created_at: '3 hours ago',
      type: 1,
      info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      unread: true,
    },
    {
      title: 'New Sensitive Data',
      created_at: '3 hours ago',
      type: 2,
      info:
        'Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut',
      unread: true,
    },
    {
      title: 'New Sensitive Data',
      created_at: '3 hours ago',
      type: 3,
      info:
        'Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut',
      unread: true,
    },
    {
      title: 'Security Threat',
      created_at: '3 hours ago',
      type: 1,
      info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      unread: true,
    },
    {
      title: 'New Sensitive Data',
      created_at: '3 hours ago',
      type: 2,
      info:
        'Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut',
      unread: true,
    },
    {
      title: 'New Sensitive Data',
      created_at: '3 hours ago',
      type: 3,
      info:
        'Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut',
      unread: true,
    },
  ],
  graphs: {
    sensitiveInfoByType: {
      swiftCode: 4,
      email: 8,
      usBankAccountNumber: 4,
      phone: 5,
      ssn: 2,
      usPassport: 4,
      abaRouting: 5,
      dob: 4,
      creditCard: 3,
      IBAN: 2,
    },
    sensitiveInfoByCatagory: {
      HIPAA: 4,
      FERPA: 8,
      Class3: 4,
      Class4: 5,
      Class5: 2,
      Class6: 4,
      Class7: 5,
      Class8: 4,
      PCI: 3,
      PII: 9,
    },
    inspectionCoveragePercentages: {
      DS1: 70,
      DS2: 43,
      DS3: 90,
      DS4: 38,
    },
    countOfSensitiveInfoType: {
      DS1: 22,
      DS2: 14,
      DS3: 27,
      DS4: 11,
    },
    countOfSensitiveInfoCategory: {
      DS1: 3.5,
      DS2: 2,
      DS3: 4.5,
      DS4: 1.7,
    },
    sensitiveDataRecordCount: {
      DS1: {
        class1: 4000,
        class2: 16000,
        class3: 35000,
      },
      DS2: {
        class1: 4000,
        class2: 16000,
        class3: 35000,
      },
      DS3: {
        class1: 9000,
        class2: 25000,
        class3: 21000,
      },
      DS4: {
        class1: 4000,
        class2: 17000,
        class3: 34000,
      },
    },
    sensitiveDataDistributionByDataSource: {
      DS1: {
        swiftCode: 3,
        email: 2,
        usBankAccountNumber: 4,
        phone: 4,
        ssn: 8,
        usPassport: 1,
        abaRouting: 1,
        dob: 1,
        creditCard: 2,
      },
      DS2: {
        swiftCode: 3,
        email: 2.5,
        usBankAccountNumber: 4,
        phone: 4,
        ssn: 6.5,
        usPassport: 2,
        abaRouting: 2,
        dob: 1,
        creditCard: 2,
      },
      DS3: {
        swiftCode: 3,
        email: 2.5,
        usBankAccountNumber: 4,
        phone: 4,
        ssn: 1,
        usPassport: 2,
        abaRouting: 2,
        dob: 1,
        creditCard: 10,
      },
      DS4: {
        swiftCode: 3,
        email: 2.5,
        usBankAccountNumber: 4,
        phone: 4,
        ssn: 6.5,
        usPassport: 2,
        abaRouting: 2,
        dob: 1,
        creditCard: 2,
      },
      DS5: {
        swiftCode: 3,
        email: 2.5,
        usBankAccountNumber: 4,
        phone: 4,
        ssn: 6.5,
        usPassport: 2,
        abaRouting: 2,
        dob: 1,
        creditCard: 2,
      },
      DS6: {
        swiftCode: 3,
        email: 2.5,
        usBankAccountNumber: 4,
        phone: 4,
        ssn: 10,
        usPassport: 5,
        abaRouting: 10,
        dob: 1,
        creditCard: 2,
      },
    },
  },
}