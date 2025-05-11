PRAGMA foreign_keys = ON;

-- Note that instead, later you can use comment id's to tell if a comment has already been rendered
CREATE TABLE comments(
    video_id VARCHAR(50) PRIMARY KEY,
    comment TEXT
)