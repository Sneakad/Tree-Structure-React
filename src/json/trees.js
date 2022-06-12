//creating the json data schema

const data = {
    id: 1,
    name: 'This PC',
    folder: true,
    child: [
        {
            id: 2,
            name: 'Local Disk C',
            folder: true,
            child: [
                {
                    id: 3,
                    name: 'Windows',
                    folder: false,
                    child: []
                },
                {
                    id: 4,
                    name: 'Program Files',
                    folder: true,
                    child: [
                        {
                            id: 5,
                            name: 'Adobe',
                            folder: false,
                            child: []
                        }
                    ]
                }
            ]
        },
        {
            id: 6,
            name: 'Local Disk D',
            folder: true,
            child: [
                {
                    id: 7,
                    name: 'Videos',
                    folder: false,
                    child: []
                },
                {
                    id: 8,
                    name: 'Games',
                    folder: true,
                    child: [
                        {
                            id: 9,
                            name: 'GTA V',
                            folder: false,
                            child: []
                        }
                    ]
                },
                {
                    id: 10,
                    name: 'Images',
                    folder: false,
                    child: []
                },
            ]
        },
        {
            id: 11,
            name: 'Local Disk E',
            folder: false,
            child: []
        }
    ]
}

export default data;


