# information design pattern
For efficient remixability of points we need a tag matching system. Each file should be described by tags that identify the topic and track it implements.

_track_: a flavor of the learning material (fx. R, MatLab, humanities, HPC, ...)  

_topic_: the scope and perspective on the taught materials (fx. 'git pull origin master example')

### an example:

1) a learner follows a course on git-collaborative. 
2) the course markdown references a sequence of _elaborations_ - material around a concise group of points addressing a single user action with a distinct purpose, like 'pulling a repository', or 'switching between branches'. To accomodate different learning styles and learner backgrounds all elaborations and examples have a _track_ identifier. The identifier determines which elaboration to choose. 
3) the client then embeds the appropriate elaborations in the course.
4) viewing the material the learner can reduce the verbosity with a slider to adapt the material with growing comprehension.
