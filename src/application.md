# Name of your Project

> This document will be part of the terms and conditions of your agreement and therefore needs to contain all the required information about the project. Don't remove any of the mandatory parts presented in bold letters or as headlines (except for the title)! Lines starting with a `>` (such as this one) should be removed. Please use markdown instead of HTML (e.g. `![](image.png)` instead of `<img>`). 
>
> See the [Dev Grants Program Process](https://github.com/filecoin-project/devgrants/blob/master/README.md#submit-a-proposal-for-an-rfp) on how to submit devgrants.

- **Team Name:** Legal name of your team (e.g. IPFS)
- **Payment Address:** FIL, Ethereum (USDT/USDC/DAI) (USD) payment address. Please also specify the currency. (e.g. fil..)

> ⚠️ *The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe.*

## Project Overview :page_facing_up:

If this application is in response to an RFP, please indicate this on the first line of this section.

If this is an application for a follow-up grant (the continuation of an earlier, successful grant), please provide name and/or pull request of said grant on the first line of this section.

### Overview

Please provide the following:

- If the name of your project is not descriptive, a tag line (one sentence summary).
- A brief description of your project.
- An indication of how your project relates to / integrates into the Public Good.
- An indication of why your team is interested in creating or continuing this project.

### Project Details

We expect the teams to already have a solid idea project's expected final state. Therefore, we ask the teams to submit (where relevant):

- Mockups/designs of any UI UX components
- Data models / API specifications of the core functionality
- An overview of the technology stack to be used
- Documentation of core components, protocols, architecture, etc. to be deployed
- PoC/MVP or other relevant prior work or research on the topic
- documentation and maintenance plan for the lifecycle of the projects versions (when applicatable) 
- What your project is _not_ or will _not_ provide or implement
  - This is a place for you to manage expectations and to clarify any limitations that might not be obvious

Things that shouldn’t be part of the application:
- For non-infrastructure projects—deployment and hosting costs, maintenance or audits
- Business-oriented activities (marketing, business planning), events or outreach

### Public Goods Fit

Help us locate your project in the public goods and commons landscape and what problems it tries to solve by answering each of these questions:

- Where and how does your project fit?
- Who is your target audience?
- What need(s) does your project meet?
- Are there any other projects similar to yours in the web3 ecosystem?
  - If so, how is your project different?
  - If not, are there similar projects in related ecosystems?

## Team :busts_in_silhouette:

### Team members

- Name of team leader
- Names of team members

### Contact

- **Contact Name:** Full name of the contact person in your team
- **Contact Email:** Contact email (e.g. bob@nope.com)
- **Website:**

### Legal Structure

- **Registered Address:** Address of your registered legal entity, if available. Please keep it in a single line. (e.g. no address 1, no city, country 123445)
- **Registered Legal Entity or DBA:** Name of your registered legal entity, if available. 

### Team's experience

Please describe the team's relevant experience. If your project involves development work, we would appreciate it if you singled out a few interesting projects or contributions made by team members in the past. For research-related grants, references to past publications and projects in a related domain are helpful.

If anyone on your team has been awarded funding previously for this work, please list the funder and project here.

### Team Code Repos

- https://github.com/<your_organisation>
- https://github.com/<your_organisation>/<project_a>
- https://github.com/<your_organisation>/<project_b>

Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine.

- https://github.com/<team_member_a>
- https://github.com/<team_member_b>

### Team LinkedIn Profiles (if available)

- https://www.linkedin.com/<person_a>
- https://www.linkedin.com/<person_b>

## Development Status :open_book:

If you've already started implementing your project or it is part of a larger repository, please provide a link and a description of the code here. In any case, please provide some documentation on the research and other work you have conducted before applying. This could be:

- links to improvement proposals or [RFPs](https://github.com/protocol/research-grants/tree/master/RFPs) (requests for proposal),
- academic publications relevant to the thesis
- links to your research diary, blog posts, articles, forum discussions or open GitHub issues,
- references to conversations you might have had related to this project
- previous interface iterations, such as mock-ups and wireframes.

## Development Roadmap :nut_and_bolt:

This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories [here](../). Since these will be part of the agreement, it helps to describe _the functionality we should expect in as much detail as possible_, plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected.

Below we provide an **example roadmap**. In the descriptions, it should be clear how your project is related to public goods. We _recommend_ that teams structure their roadmap as 1 milestone ≈ 1 month.

For each milestone,

- make sure to include a specifications. _Treat it as a contract_; the level of detail must be enough to later verify that the milestone meets the specification.
- include the amount of funding requested _per milestone_.
- include documentation (tutorials, API specifications, architecture diagrams, whatever is appropriate) in each milestone. This ensures that the code can be widely used by the community.
- provide a test suite, comprising unit and integration tests, along with a guide on how to set up and run them.
- commit to providing Dockerfiles for the delivery of your project.
- indicate milestone duration as well as number of full-time employees working on each milestone.
- **Deliverables are mandatory for all milestones**, and deliverable 0e at least for the last one. If you do not intend to deliver one of these, please state a reason in its specification (e.g. Milestone X is research oriented and as such there is no code to test).

> :zap: If any of your deliverables is based on somebody else's work, make sure you work and publish _under the terms of the license_ of the respective project and that you **highlight this fact in your milestone documentation** and in the source code if applicable! 

### Overview

- **Total Estimated Duration:** Duration of the whole project (e.g. 2 months)
- **Full-Time Equivalent (FTE):**  Average number of full-time employees working on the project throughout its duration (see [Wikipedia](https://en.wikipedia.org/wiki/Full-time_equivalent), e.g. 2 FTE)
- **Total Costs:** Requested amount in USD for the whole project (e.g. 12,000 USD). Note that the acceptance criteria and additional benefits vary depending on the [level](../README.md#level_slider-levels) of funding requested. This and the costs for each milestone need to be provided in USD; if the grant is paid out in Bitcoin, the amount will be calculated according to the exchange rate at the time of payment.

### Milestone 1 Example — Basic functionality

- **Estimated duration:** 1 month
- **FTE:**  1,5
- **Costs:** 8,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0 / GPLv3 / MIT / Unlicense |
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can (for example) spin up a IPFS nodes and send test transactions, which will show how the new functionality works. |
| 0c. | Testing and Testing Guide | Core functions will be fully covered by comprehensive tests to ensure functionality. In the documentation, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article**/workshop/video that explains [...] (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.) |
| 1. | IPFS MS (milestone) A: X | We will create an IPFS node that will... (Please list the functionality that will be implemented for the first milestone.) |
| 2. | IPFS MS B: | The IPFS MS B will ... |
| 3. | The IPFS MS C: | The IPFS MS C will... |
| 4. | Fil Chain | IPFS A, B and C of our IPFS project will interact in such a way... (Please describe the deliverable here as detailed as possible) |
| 5. | Library: XYZ | We will deliver a JS library that will implement the functionality described under "ZYX Library" |
| 6. | Smart contracts: ... | We will deliver a set of smart contracts that will...


### Milestone 2 Example — Additional features

- **Estimated Duration:** 1 month
- **FTE:**  1,5
- **Costs:** 8,000 USD

...


## Future Plans

Please include here

- how you intend to use, enhance, promote and support your project in the short term, and
- the team's long-term plans and intentions in relation to it.
- plans on maintenance including documentation, tutorials, version updates where applicable


## Additional Information :heavy_plus_sign:

**How did you hear about us ** / Twitter / Discord / Announcement by another team / personal recommendation / etc.

Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:

- Work you have already done.
- If there are any other teams who have already contributed (financially) to the project.
- Previous grants you may have applied for.
- What your favorite place to hangout online is. 
