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
        const education: Education[] = [
            {
                id: "1",
                userId: "1",
                eduName: "UNSW",
                eduDegree: "Bachelors",
                year: "2020"
            },{
                id: "2",
                userId: "1",
                eduName: "UNSW",
                eduDegree: "Masters",
                year: "2023"
            }
        ];
        const portfolio: Portfolio = {
            id: "1",
            userId: "1",
            portdisc: `I have 30 years of experience working as a Business Analyst in various industries.
            I have worked with Dexus [One of Australia's leading real estate groups, 
            managing a high-quality Australian property portfolio, headquartered in Sydney.`,  // This is nothing but Summary
        };
        const client: Client[] = [
            {
                id: "1",
                clientName: "Google",
                hqLocation: "USA",
            },
            {
                id: "2",
                clientName: "Facebook",
                hqLocation: "USA",
            },
            {
                id: "3",
                clientName: "Oracle",
                hqLocation: "USA",
            },
            {
                id: "4",
                clientName: "Amazon",
                hqLocation: "USA",                
            },
        ];
        const experience: Experience[] = [
            {
                id: "1",
                clientId: "1",
                portfolioid: "1",
                startDate: "2020-01-01",
                endDate: "2020-01-01",
                isCurrentlyWorking: true,
                location: "USA",
                role: "Developer",
            },
            {
                id: "2",
                clientId: "2",
                portfolioid: "1",
                startDate: "2020-01-01",
                endDate: "2020-01-01",
                isCurrentlyWorking: true,
                location: "USA",
                role: "Developer",
            },
            {
                id: "3",
                clientId: "3",
                portfolioid: "1",
                startDate: "2020-01-01",
                endDate: "2020-01-01",
                isCurrentlyWorking: true,
                location: "USA",
                role: "Developer",
            },
            {
                id: "4",
                clientId: "4",
                portfolioid: "1",
                startDate: "2020-01-01",
                endDate: "2020-01-01",
                isCurrentlyWorking: true,
                location: "USA",
                role: "Developer",
            },
        ];
        const project: Project[] = [
            {
                id: "1",
                experienceId: "1",
                projectTitle: "Google Project",
                projectDesc: "Project Description: Google Project",
            },
            {
                id: "2",
                experienceId: "2",
                projectTitle: "Facebook Project",
                projectDesc: "Project Description: Facebook Project",
            },
            {
                id: "3",
                experienceId: "3",
                projectTitle: "Oracle Project",
                projectDesc: "Project Description: Oracle Project",
            },
            {
                id: "4",
                experienceId: "4",
                projectTitle: "Amazon Project",
                projectDesc: "Project Description: Amazon Project",
            },
        ];
        const stakeholder: Stakeholder[] = [
            {
                id: "1",
                stakeholderName: "CEO",
            },
            {
                id: "2",
                stakeholderName: "CTO",
            },
            {
                id: "3",
                stakeholderName: "CFO",
            },
            {
                id: "4",
                stakeholderName: "COO",
            },
            {
                id: "5",
                stakeholderName: "CIO",
            },
            {
                id: "6",
                stakeholderName: "Project Manager",
            }
        ];
        const tool: Tool[] = [
            {
                id: "1",
                toolName: "Jira",
            },
            {
                id: "2",
                toolName: "Confluence",
            },
            {
                id: "3",
                toolName: "Slack",
            },
            {
                id: "4",
                toolName: "Teams",
            },
            {
                id: "5",
                toolName: "Excel",
            },
            {
                id: "6",
                toolName: "Word",
            }
        ];
        const item: Item[] = [
            {
                id: "1",
                itemName: "functional requirement specification",
            },
            {
                id: "2",
                itemName: "technical requirement specification",
            },
            {
                id: "3",
                itemName: "business requirement specification",
            },
            {
                id: "4",
                itemName: "use case",
            },
            {
                id: "5",
                itemName: "user story",
            },
            {
                id: "6",
                itemName: "test case",
            }
        ];
        const contribution: Contribution[] = [
            {
                id: "1",
                projectId: "1",
                actionName: "Gathered",
                adjContext: "a detailed",
                itemName: item[0],
                discription: "for the project",
                connector: "BOTH",
                stakeholder: [stakeholder[0], stakeholder[1]],
                tool: [tool[0], tool[1]],
            }
        ];
        const outcome: Outcome[] = [
            {
                id: "1",
                projectId: "1",
                outcomeAction: "Increased",
                outcomeItemAffected: "Delivery Time",
                outcomebyOrFrom: "by",
                outcomeAcheivement: "10 days",
            }
        ];
    };
};