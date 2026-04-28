<?php
class Database {
    private $host = 'localhost';
    private $db_name = 'phone_store';
    private $username = 'root';
    private $password = '';
    public $conn;

    public function getConnection() {
        if ($this->conn) return $this->conn;
        
        $this->conn = new mysqli($this->host, $this->username, $this->password, $this->db_name);
        
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
        
        $this->conn->set_charset("utf8mb4");
        return $this->conn;
    }
    
    public function closeConnection() {
        if ($this->conn) $this->conn->close();
    }
}
?>