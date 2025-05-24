![b1-api-cookbook logo](https://github.com/Xaypanya/b1-api-cookbook/blob/main/b1-api-cookbook.png)

# B1 API Cookbook
## Overview

The `b1-api-cookbook` repository is a comprehensive resource for developers working with the **SAP Business One (SAP B1) Service Layer APIs**. It provides detailed information about service endpoints, metadata schemas, and practical examples to assist both beginners and experienced developers in integrating with SAP B1 services. This repository includes:

- **Service Descriptions**: JSON files defining the endpoints and operations for each service.
- **Metadata Schemas**: OData V4 schemas (in EDMX format) describing the data models used by the APIs.
- **Guides for Beginners**: Step-by-step instructions to set up and use the APIs.
- **Code Examples**: Practical examples of API calls for various services.

The goal of this repository is to simplify interaction with the SAP B1 Service Layer by providing clear documentation and reusable examples.

## Repository Structure

- **/services**: Contains JSON files for each service, detailing endpoints, operations, and examples (e.g., `AccountCategoryService.json`).
- **/schemas**: Includes OData V4 EDMX files defining the metadata for each service.
- **/examples**: Provides sample code and API call examples for different services and operations.
- **/guides**: Beginner-friendly tutorials and setup instructions for working with the SAP B1 Service Layer.

## Getting Started

### Prerequisites
To use the SAP B1 Service Layer APIs, ensure you have:
- Access to an SAP B1 instance with the Service Layer enabled.
- A valid user account with appropriate permissions.
- A development environment with tools like Postman, cURL, or a programming language (e.g., Python, JavaScript) for making HTTP requests.
- Basic understanding of REST APIs and OData V4.

### Setup Instructions
1. **Access the Service Layer**:
   - The SAP B1 Service Layer is typically hosted at a URL like `https://<your-server>:50000/b1s/v2/`.
   - Log in to the Service Layer using a POST request to the `/Login` endpoint with your credentials:
     ```json
     POST https://<your-server>:50000/b1s/v2/Login
     {
       "UserName": "your-username",
       "Password": "your-password",
       "CompanyDB": "your-company-database"
     }
     ```
     Save the `SessionId` from the response for subsequent requests.

2. **Explore Available Services**:
   - The Service Layer exposes various services like `AccountCategoryService`, `BusinessPartners`, and more.
   - Refer to the JSON files in the `/services` folder for details on each service and its operations.

3. **Use Metadata Schemas**:
   - The `/schemas` folder contains EDMX files that describe the data models for each service.
   - Use these schemas to understand the structure of entities and enumerations used in API responses.

4. **Test API Calls**:
   - Use tools like Postman or cURL to test API endpoints.
   - Example requests are provided in the `/examples` folder and within the JSON files in `/services`.

## Services and Endpoints

The `/services` folder contains JSON files that describe the available services and their operations. Below is an example of the `AccountCategoryService` based on its JSON definition:

### AccountCategoryService
**Description**: This API enables you to invoke the interfaces defined on `AccountCategoryService`, which manages account categories in SAP B1.

**Operations**:
- **Get Category List**:
  - **Method**: GET
  - **Path**: `AccountCategoryService_GetCategoryList`
  - **Description**: Retrieves a list of account categories.
  - **Example**:
    ```
    GET https://<your-server>:50000/b1s/v2/AccountCategoryService_GetCategoryList
    ```
  - **Method**: POST
  - **Path**: `AccountCategoryService_GetCategoryList`
  - **Description**: Invokes the `GetCategoryList` method to retrieve account categories.
  - **Example**:
    ```
    POST https://<your-server>:50000/b1s/v2/AccountCategoryService_GetCategoryList
    ```

For a complete list of services and their operations, refer to the JSON files in the `/services` folder.

## Metadata Schemas

The Service Layer uses OData V4 to define its data models. The `/schemas` folder contains EDMX files that describe the structure of entities and enumerations. Below is an example schema snippet for the `AccountCategoryService`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<edmx:Edmx Version="4.0" xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx">
    <edmx:DataServices>
        <Schema Namespace="SAPB1" xmlns="http://docs.oasis-open.org/odata/ns/edm">
            <EnumType IsFlags="false" Name="AccountCategorySourceEnum" UnderlyingType="Edm.Int32">
                <Member Name="acsBalanceSheet" Value="0"/>
                <Member Name="acsProfitAndLoss" Value="1"/>
                <Member Name="acsTrialBalance" Value="2"/>
            </EnumType>
            <EnumType IsFlags="false" Name="AccountSegmentationTypeEnum" UnderlyingType="Edm.Int32">
                <Member Name="ast_Alphanumeric" Value="0"/>
                <Member Name="ast_Numeric" Value="1"/>
            </EnumType>
            <EnumType IsFlags="false" Name="AcquisitionPeriodControlEnum" UnderlyingType="Edm.Int32">
                <Member Name="apcProRataTemporis" Value="0"/>
                <Member Name="apcFirstYearConvention" Value="1"/>
                <Member Name="apcHalfYear" Value="2"/>
                <Member Name="apcFullYear" Value="3"/>
            </EnumType>
            <EnumType IsFlags="false" Name="AcquisitionProRataTypeEnum" UnderlyingType="Edm.Int32">
                <Member Name="aprtExactlyDailyBase" Value="0"/>
                <Member Name="aprtFirstDayOfCurrentPeriod" Value="1"/>
                <Member Name="aprtFirstDayOfNextPeriod" Value="2"/>
            </EnumType>
            <EnumType IsFlags="false" Name="ActivityRecipientObjTypeEnum" UnderlyingType="Edm.Int32">
                <Member Name="arotUser" Value="0"/>
                <Member Name="arotEmployee" Value="1"/>
                <Member Name="arotRecipientList" Value="2"/>
            </EnumType>
        </Schema>
    </edmx:DataServices>
</edmx:Edmx>
```

This schema defines enumerations used by the `AccountCategoryService`, such as `AccountCategorySourceEnum` and `AcquisitionPeriodControlEnum`. Refer to the `/schemas` folder for additional schemas.

## Examples

The `/examples` folder contains sample API calls for various services. Below is an example for invoking the `AccountCategoryService_GetCategoryList` endpoint:

```bash
curl -X GET "https://<your-server>:50000/b1s/v2/AccountCategoryService_GetCategoryList" \
-H "Cookie: B1SESSION=<your-session-id>" \
-H "Content-Type: application/json"
```

Additional examples, including POST requests and payloads, can be found in the `/examples` folder and within the JSON files in `/services`.

## Guides for Beginners

The `/guides` folder contains tutorials to help new developers get started with the SAP B1 Service Layer. Key topics include:
- **Setting Up Authentication**: How to log in and manage sessions.
- **Making Your First API Call**: A step-by-step guide to querying the Service Layer.
- **Understanding OData V4**: An introduction to OData concepts and how they apply to SAP B1.
- **Troubleshooting Common Issues**: Tips for resolving errors like invalid sessions or incorrect payloads.

## Contributing

Contributions to the `b1-api-cookbook` are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your changes.
3. Add or update JSON files, schemas, or examples.
4. Submit a pull request with a clear description of your changes.

Please ensure that any new JSON files or schemas are accurate and follow the OData V4 standard.

## License

This repository is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the content as needed.

## Contact

For questions or feedback, please open an issue in the repository or contact the maintainers.