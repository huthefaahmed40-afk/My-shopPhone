<?php
/**
 * ========================================
 * 🔐 إعدادات الاتصال بقاعدة بيانات Oracle
 * ========================================
 */
class Database {
    private $host = 'localhost';
    private $port = '1521';
    private $service = 'freepdb1';          // غيّر إلى اسم الخدمة الخاص بك (مثل ORCL)
    private $username = 'My_Store_phone';
    private $password = '1111'; // ضع كلمة المرور هنا
    private $conn;

    public function getConnection() {
        if ($this->conn) return $this->conn;

        // نص اتصال TNS
        $tns = "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST={$this->host})(PORT={$this->port}))(CONNECT_DATA=(SERVICE_NAME={$this->service})))";

        // الاتصال مع ترميز UTF-8 للعربية
        $this->conn = oci_connect($this->username, $this->password, $tns, 'AL32UTF8');

        if (!$this->conn) {
            $e = oci_error();
            header('Content-Type: application/json; charset=utf-8');
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'فشل الاتصال بقاعدة البيانات'], JSON_UNESCAPED_UNICODE);
            exit;
        }

        // ضبط الإعدادات الإقليمية للعربية والتاريخ
        $stid = oci_parse($this->conn, "ALTER SESSION SET NLS_LANGUAGE='ARABIC' NLS_TERRITORY='SAUDI ARABIA' NLS_DATE_FORMAT='YYYY-MM-DD HH24:MI:SS'");
        oci_execute($stid);

        return $this->conn;
    }

    public function closeConnection() {
        if ($this->conn) {
            oci_close($this->conn);
        }
    }
}
?>