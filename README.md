# Requirements and Specification Document

## Melody Mapper

### Project Abstract

<!--A one paragraph summary of what the software will do.-->

This is an example paragraph written in markdown. You can use *italics*, **bold**, and other formatting options. You can also <u>use inline html</u> to format your text. The example sections included in this document are not necessarily all the sections you will want, and it is possible that you won't use all the one's provided. It is your responsibility to create a document that adequately conveys all the information about your project specifications and requirements.

Please view this file's source to see `<!--comments-->` with guidance on how you might use the different sections of this document. 

### Customer

<!--A brief description of the customer for this software, both in general (the population who might eventually use such a system) and specifically for this document (the customer(s) who informed this document). Every project will have a customer from the CS506 instructional staff. Requirements should not be derived simply from discussion among team members. Ideally your customer should not only talk to you about requirements but also be excited later in the semester to use the system.-->

### User Requirements

<!--This section lists the behavior that the users see. This information needs to be presented in a logical, organized fashion. It is most helpful if this section is organized in outline form: a bullet list of major topics (e.g., one for each kind of user, or each major piece of system functionality) each with some number of subtopics.-->

Here is a user requirements sample from [Crookshanks](https://learning-oreilly-com.ezproxy.library.wisc.edu/library/view/practical-software-development/9781484206201/9781484206218_Ch02.xhtml):

| ID   | Description                                                  | Priority | Status |
| ---- | ------------------------------------------------------------ | -------- | ------ |
| R11  | Users should not have to sign into the system; their current network login should be used for identification. | Med      | Done   |
| R12  | The user should pick a project first; the tasks available are a derivative of the project. | High     | Open   |
| R13  | A full-time employee should not be able to submit a time card with less than 40 hours per week recorded. | High     | Open   |
| R14  | A contractor can submit any number of hours up to 60 without special approval. | Med      | Open   |
| R15  | A team lead can see his/her team's time cards before they are submitted but cannot approve them until the user submits it. | High     | Open   |

<div align="center"><small><i>Excerpt from Crookshanks Table 2-2 showing example user requirements for a timekeeping system</i></small></div>

- You 
  - Can
    - Use
- Bullet
  - Points
    - In
    - Markdown

### Use Cases & User Stories

<!--Use cases and user stories that support the user requirements in the previous section. The use cases should be based off user stories. Every major scenario should be represented by a use case, and every use case should say something not already illustrated by the other use cases. Diagrams (such as sequence charts) are encouraged. Ask the customer what are the most important use cases to implement by the deadline. You can have a total ordering, or mark use cases with “must have,” “useful,” or “optional.” For each use case you may list one or more concrete acceptance tests (concrete scenarios that the customer will try to see if the use case is implemented).-->

Here is a sample user story from [Clean Agile](https://learning-oreilly-com.ezproxy.library.wisc.edu/library/view/clean-agile-back/9780135782002/ch03.xhtml#ch03lev1sec1) using a markdown block quote:

> As the driver of a car, in order to increase my velocity, I will press my foot harder on the accelerator pedal.

1. You
   1. Can
      1. Also
2. Use
   1. Numbered
      1. Lists

### User Interface Requirements

<!--Describes any customer user interface requirements including graphical user interface requirements as well as data exchange format requirements. This also should include necessary reporting and other forms of human readable input and output. This should focus on how the feature or product and user interact to create the desired workflow. Describing your intended interface as “easy” or “intuitive” will get you nowhere unless it is accompanied by details.-->

<!--NOTE: Please include illustrations or screenshots of what your user interface would look like -- even if they’re rough -- and interleave it with your description.-->

Images can be included with `![alt_text](image_path)`

### Security Requirements

<!--Discuss what security requirements are necessary and why. Are there privacy or confidentiality issues? Is your system vulnerable to denial-of-service attacks?-->

### System Requirements

<!--List here all of the external entities, other than users, on which your system will depend. For example, if your system inter-operates with sendmail, or if you will depend on Apache for the web server, or if you must target both Unix and Windows, list those requirements here. List also memory requirements, performance/speed requirements, data capacity requirements, if applicable.-->

| You    |    can    |    also |
| ------ | :-------: | ------: |
| change |    how    | columns |
| are    | justified |         |

### Specification

<!--A detailed specification of the system. UML, or other diagrams, such as finite automata, or other appropriate specification formalisms, are encouraged over natural language.-->

<!--Include sections, for example, illustrating the database architecture (with, for example, an ERD).-->

<!--Included below are some sample diagrams, including some example tech stack diagrams.-->

You can make headings at different levels by writing `# Heading` with the number of `#` corresponding to the heading level (e.g. `## h2`).

#### Technology Stack

1. HTML
2. CSS
3. Javascript
4. REST API
5. Flask (Python)
6. SQLAlchemy
7. MySQL
8. Docker

```mermaid
flowchart RL
subgraph Front End
	A(HTML \n CSS\n Javascript)
end
	
subgraph Back End
	B(Python: Flask)
end
	
subgraph Database
	C[(MySQL)]
end

A <-->|"REST API"| B
B <-->|SQLAlchemy| C
```

#### Database

```mermaid
---
title: Database ERD for MelodyMapper
---
erDiagram
    User ||--o{ Recording : "created by"

    User {
        int user_id PK
        string name
        string email
    }

    Recording {
        int recording_id PK
        string name
        int user_id FK
    }

```

#### Class Diagram

```mermaid
---
title: Class Diagram for MelodyMapper Program
---
classDiagram
    class User {
        - int user_id
        - String name
        - String email
        + User(int user_id, String name, String email)
        + void setUserID(int user_id)
        + String getUserID()
        + void setName(String name)
        + String getName()
        + void setEmail(String email)
        + String getEmail()
        + void getRecordings()
    }

    class Recording {
        - String name
        + Recording(String name)
        + void setName(String name)
        + String getName()
        + MIDI convert()
    }

    class MIDI {
        + MIDI(Recording recording)
    }
```

#### Flowchart

```mermaid
---
title: Program Flowchart
---
graph TD;
    Start([Start]) --> Input_Recording[/Input Recording \n/];
    Input_Recording --> Process_Recording[Process Recording];
    Process_Recording --> Validate_Recording{Validate Recording};
    Validate_Recording -->|Valid| Process_Valid_Recording[Process Valid Recording];
    Validate_Recording -->|Invalid| Error_Message[/Error Message/];
    Process_Valid_Recording --> Translate_Recording_to_MIDI[Translate Recording to MIDI];
    Translate_Recording_to_MIDI  --> Store_MIDI_File{Store MIDI File};
    Store_MIDI_File -->|Valid| Success_Message[/Success Message/];
    Store_MIDI_File -->|Invalid| Error_Message[/Error Message/];
    Translate_Recording_to_MIDI --> Display_MIDI[/Display MIDI to player/];
    Display_MIDI --> End([End]);
    Success_Message --> End;
    Error_Message --> End;
```

#### Behavior

```mermaid
---
title: State Diagram For MelodyMapper Application
---
stateDiagram
    [*] --> Ready
    Ready --> Recording : Start Recording
    Recording --> Validate : Validate Recording
    Validate --> Conversion : Convert Recording
    Validate --> ValidateError : Validation Error
    ValidateError --> Ready : Restart
    RecordingError --> Ready : Restart
    Recording --> RecordingError : Recording Error
    Conversion --> Ready : Display MIDI
    Conversion --> Store : Save MIDI
    Store --> Ready : Storing success
    Store --> StoreError : Storing error
    StoreError --> Ready : Display saving failed
```

#### Sequence Diagram

```mermaid
sequenceDiagram
participant Frontend
participant FlaskBackend
participant MySQLDatabase

Frontend ->> FlaskBackend: HTTP Request (e.g., GET /api/recordings)
activate FlaskBackend
Frontend ->> FlaskBackend: HTTP Request (e.g., POST /api/recordings)

FlaskBackend ->> MySQLDatabase: Query (SELECT * FROM Recording)
activate MySQLDatabase
FlaskBackend ->> MySQLDatabase: Query (SELECT * FROM User)
FlaskBackend ->> MySQLDatabase: Query (INSERT INTO Recording)
FlaskBackend ->> MySQLDatabase: Query (INSERT INTO User)

MySQLDatabase -->> FlaskBackend: Result Set
deactivate MySQLDatabase

FlaskBackend -->> Frontend: JSON Response
deactivate FlaskBackend
```

### Standards & Conventions

This portion of the document outlines the coding standards and conventions that are used in this project.

#### Coding Standards

The team prioritized the following coding standards during development:

1. **Simplicity:** Keep code simple which makes the code easier to understand, debug, and maintain.
2. **Modularity:** Encourages breaking down code into small, cohesive modules or functions that perform specific tasks.
3. **Scalability:** Write code that can scale to accommodate future growth in terms of efficiency and complexity.
4. **Consistency:** Enforce consistent naming conventions, formatting styles, and coding practices across the codebase.

#### Formatting Conventions

For Front End software development we use the VSCode extension [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) in its default configuration. 
Back End development uses the VSCode extension [autopep8](https://marketplace.visualstudio.com/items?itemName=ms-python.autopep8) in its default configuration. 
These extensions provide out of the box solutions that are lightweight and easy to use.

You can also read more about the Python PEP 8 standard [here](https://peps.python.org/pep-0008/).

#### Naming Conventions

1. Compound names should use upper case letters to mark the beginning of the next word likeThis and LikeThisToo
2. Names of user-defined types (files, classes, or enumerated types) should begin with upper case letters LikeThis or This
3. Names of functions, including class methods, should begin with lower case letters likeThis or this
4. Names of variables should begin with a lower case letter likeThis or this
5. Names of types and functions should be chosen to be self-documenting
6. Names of meaningful variables should be chosen to be self-documenting. Names of variables whose function is internally important only, such as loop counters, should be simple.

#### Comment Conventions

1. **JavaScript:** For JavaScript functions, use JSDoc-style comments to provide documentation for functions. This includes a description of what the function does, parameters it accepts, and the return value.
```
/**
 * Calculate the sum of two numbers.
 * 
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} The sum of num1 and num2.
 */
function sum(num1, num2) {
    return num1 + num2;
}
```

2. **Python:** For Python functions, use docstrings to document the purpose, parameters, and return values of the function.
```
def calculate_sum(num1, num2):
    """
    Calculate the sum of two numbers.
    
    Args:
        num1 (int): The first number.
        num2 (int): The second number.
    
    Returns:
        int: The sum of num1 and num2.
    """
    return num1 + num2

```

3. **TODO Comments:** Use TODO comments to mark areas of code that need improvement or additional work. Include a brief description of what needs to be done and any relevant context.
