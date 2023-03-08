
// TODO: Change the job description based on job clicked
const BCBS = document.getElementById('BCBS');
const userTesting = document.getElementById('USTest');
const jobDesc = document.querySelector('.job-desc');

BCBS.addEventListener('click', bluecross); 
userTesting.addEventListener('click', USTest); 























function bluecross() {
    BCBS.style.backgroundColor = "rgba(246,160,153,1.00)";
    userTesting.style.backgroundColor = "";
    jobDesc.childNodes[1].innerText = 'ITBS Enterprise and Monitoring Intern';
    jobDesc.childNodes[3].innerText = 'May 2022 - August 2022';
    jobDesc.childNodes[5].innerText = 'Developed a pipeline delivery tool using Jenkins, Github, Sonarqube, and Artifactory';
    jobDesc.childNodes[7].innerText = 'Documented and maintain technological documents for new users';
    jobDesc.childNodes[9].innerText = 'Created monitoring dashboard using Splunk technology';
}

function USTest() {
    userTesting.style.backgroundColor = "rgba(246,160,153,1.00)";
    BCBS.style.backgroundColor = "";
    jobDesc.childNodes[1].innerText = 'Independent Contractor - UserTesting';
    jobDesc.childNodes[3].innerText = 'August 2018 - Current';
    jobDesc.childNodes[5].innerText = 'Perform software/product test for a wide variety of companies in a remote setting.';
    jobDesc.childNodes[7].innerText = 'Self-paced environment that requires great time management and attention to detail.';
    jobDesc.childNodes[9].innerText = 'Demonstrate communication skills through giving feedbacks on software/product and interviews with customers.';
}