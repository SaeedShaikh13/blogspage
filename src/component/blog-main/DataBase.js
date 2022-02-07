import React,{useEffect} from 'react';
import Nav from '../navigation/Nav';

const DataBase = () => {
    useEffect (()=>{
        window.scrollTo(0, 0);
      },[])
    
    return (
        <div>
            <div>
            <Nav/>
            </div>


            <div className='data-engi-main' >
            <h1>DatabaseAdministration(On-Premises&Cloud)</h1> <br/>
      <img id='data-engi-img' src='https://www.infogenx.com/image/data222.png'></img>
            <div className='data-engi-text'>
               <p id='data-engi-h' >Do you know what is Data Engineering? And Why should you use Infogenx
        for Data Engineering?
            </p>
            
            <p id='data-engi-p' >
            To begin with, we are constantly bombarded with data in our daily lives. It demonstrates that software
          engineering wishes to add a new category for data engineering, which is useful in many real-time platforms such
         as data storage, transportation, and so on.
         </p>
         <p id='data-engi-h' >
         Data Engineering's Role:
        </p>
<p id='data-engi-p' >
        Data Engineering is a field concerned with data analysis and tasks involving the acquisition and storage
of data from other sources. Then, process the data and convert it into clean data that can be used in
subsequent processes such as data visualisations, business analytics, data science solutions, and so on.

Data Engineering improves the productivity of data science. If such a field does not exist, we will have to
spend more time preparing data analysis to solve complex business problems. As a result, Data
Engineering necessitates a thorough understanding of technologies, tools, and the faster execution
of complex datasets with dependability.

Data Engineering is in charge of data pipeline design, maintenance, extension, and construction support.
Many data engineering teams are working to create data platforms. Many organisations are unable to
save data in a SQL database using a single pipeline. As a result, they have many teams using various data
access techniques.

Data Engineer Responsibilities: A data engineer is a technical person who is in charge of architecting,
building, testing, and maintaining the data system. They are in charge of identifying recent trends in
datasets and developing efficient algorithms to make data more useful. They require required skills such
as programming, mathematics, and computer science, as well as experience and soft skills to
communicate data trends that aid in business growth.
 </p>

 <p id='data-engi-h' >
 Some of the key responsibilities are as follows:
</p>

<p id='dat-engi-p'>
➢ Obtain the datasets required for the problem statement. <br/>
➢ Architectures must be designed, built, and maintained.<br/>
➢ Align the architecture with the needs of the business.<br/>
➢ Create the dataset process.<br/>
➢ Programming languages and tools are used to execute datasets.<br/>
➢ Find a way to increase data reliability and efficiency.<br/>
➢ Use large datasets to solve business problems.<br/>
➢ Bring in machine learning and statistical techniques.<br/>
➢ Predictive and prescriptive machine learning models were created.<br/>
➢ Prepare tasks that will be automated using the necessary data.<br/>
➢ Deliver the findings to stakeholders based on the findings of the analysis.<br/>
</p>

<p id='data-engi-h' >
Why should you use Infogenx for Data Engineering? Analytics for business:
</p>

<p id='data-engi-p' >
To align analytics and technology, take a business-focused approach to data engineering.
</p>

<p id='data-engi-h'>Modern architectures that are scalable
</p>
<p id='data-engi-p'>Workload-centric architectures to meet the various requirements of business stakeholders
</p>

<p id='data-engi-h'>Global Expertise</p>
<p id='data-engi-p'>Proven experience delivering analytics solutions to internet-scale companies on-premise and in the cloud.
</p>
            </div>
        </div>



        </div>
    );
};

export default DataBase;