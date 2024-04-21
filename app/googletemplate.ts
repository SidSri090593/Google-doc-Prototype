import Sampledatacreator from './generator';
import { GoogleDataTransfer } from '../Interface/Interface';
//Create sample data
const sampleData = new Sampledatacreator();
const googleSampleData: any = sampleData.createSampleData();
console.log(googleSampleData);

export default googleSampleData;