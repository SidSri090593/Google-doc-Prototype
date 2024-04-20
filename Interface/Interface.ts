export interface User {
    id: string,
    name: string,
    email: string,
    phone: string,
    googleToken: string,
};

export interface Address {
    id: string,
    userId: string,
    state: string,
    city: string,
    postcode: string,
};

export interface Education {
    id: string,
    userId: string,
    eduName: string,
    eduDegree: string,
    year: string
};

export interface Portfolio {
    id: string,
    userId: string,
    portdisc: string,
};

export interface Client {
    id: string,
    clientName: string,
    hqLocation?: string
};
 
export interface Experience {
    id: string,
    clientId: string,
    portfolioid: string,
    startDate: string, //or date
    endDate: string, // or date
    isCurrentlyWorking: boolean,
    location: string,
    role: string,
};

export interface Project {
    id: string,
    experienceId: string,
    projectTitle: string,
    projectDesc: string,
};

export interface Stakeholder {
    id: string, 
    stakeholderName: string,  
};

export interface Tool {
    id: string, 
    toolName: string,  
};

export interface Item {
    id: string, 
    itemName: string,
};

export interface Contribution {
    id: string,
    projectId: string,
    actionName: string,
    adjContext: string,
    itemName: Item,
    discription: string,
    connector: string,
    stakeholder: Stakeholder[],
    tool: Tool[],
};

export interface Outcome {
    id: string,
    projectId: string,
    outcomeAction: string,
    outcomeItemAffected: string,
    outcomebyOrFrom: string,
    outcomeAcheivement: string,
};