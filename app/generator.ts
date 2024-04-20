import {
    User,
    Address,
    Education,
    Portfolio,
    Client,
    Experience,
    Project,
    Stakeholder,
    Tool,
    Item,
    Contribution,
    Outcome
} from "../Interface/Interface";

// Sample Data

export default class Sampledatacreator {
    public static createSampleData(): void {
        const user: User = {
            id: "1",
            name: "Siddharth Sridharan",
            email: "sidsri513@gmail.com",
            phone: "0410241871",
            googleToken: "Mytoken",
        };
        const address: Address = {
            id: "1",
            userId: "1",
            state: "NSW",
            city: "Sydney",
            postcode: "2000",
        };
        const education: Education = {
            id: "1",
            userId: "1",
            eduName: "UNSW",
            eduDegree: "Bachelors",
            year: "2020",
        };
        const portfolio: Portfolio = {
            id: "1",
            userId: "1",
            portdisc: "Portfolio",
        };
        const client: Client = {
            id: "1",
            clientName: "Google",
            hqLocation: "USA",
        };
        const experience: Experience = {
            id: "1",
            clientId: "1",
            portfolioid: "1",
            startDate: "2020-01-01",
            endDate: "2020-01-01",
            isCurrentlyWorking: true,
            location: "USA",
            role: "Developer",
        };
        const project: Project = {
            id: "1",
            experienceId: "1",
            projectTitle: "Project",
            projectDesc: "Project Description",
        };
        const stakeholder: Stakeholder = {
            id: "1",
            stakeholderName: "Stakeholder",
        };
        const tool: Tool = {
            id: "1",
            toolName: "Tool",
        };
        const item: Item = {
            id: "1",
            itemName: "Item",
        };
        
    };
};