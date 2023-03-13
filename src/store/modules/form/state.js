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

    userData: JSON.parse(sessionStorage.getItem('userData')),

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