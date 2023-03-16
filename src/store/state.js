export default {
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
    
    addOnsData: [
        {
            title: 'Online service',
            text: 'Access to multiplayer games',
            price: 1,
            isSelected: false
        },
        {
            title: 'Larger storage',
            text: 'Extra 1TB of cloud save',
            price: 2,
            isSelected: false
        },
        {
            title: 'Customizable Profile',
            text: 'Custom theme on your profile',
            price: 2,
            isSelected: false
        },
    ],

    userData: {},

    monthlySubscription: true,

    summaryData: {},

    totalPrice: null
}