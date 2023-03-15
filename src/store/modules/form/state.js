export default {
    addOnsData: [
        {
            title: 'Online service',
            text: 'Access to multiplayer games',
            payment: 1,
            selected: false
        },
        {
            title: 'Larger storage',
            text: 'Extra 1TB of cloud save',
            payment: 2,
            selected: false
        },
        {
            title: 'Customizable Profile',
            text: 'Custom theme on your profile',
            payment: 2,
            selected: false
        },
    ],

    userData: [],

    monthlySubscription: true,

    planType: [
        {
            type: 'arcade',
            title: 'Arcade',
            price: 9,
            isSelected: true
        },

        {
            type: 'advanced',
            title: 'Advanced',
            price: 12,
            isSelected: false
        },

        {
            type: 'pro',
            title: 'Pro',
            price: 15,
            isSelected: false
        }
    ],

    selectedPlan: {
        type: 'Arcade',
        time: 'Monthly',
        payment: 9,
        services: [
            {
                serviceType: 'Online service',
                payment: 1
            },
            {
                serviceType: 'Larger storage',
                payment: 2
            },
        ]
    }
}