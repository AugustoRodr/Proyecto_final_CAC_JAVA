package infraestructure.database;

import domain.model.Usuario;
import infraestructure.IPersistencia;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class MySQLPersistenciaImpl implements IPersistencia {

    private Connection conexion;

    public MySQLPersistenciaImpl() {
        this.conexion = DatabaseConnection.getConnection();
    }

    @Override
    public void setUser(Usuario user) {
        String sql = "INSERT INTO users (username, password, email) VALUES(?,?,?)";

        try {
            PreparedStatement preparador = this.conexion.prepareStatement(sql);
            preparador.setString(1, user.getUsername());
            preparador.setString(2, user.getPassword());
            preparador.setString(3, user.getEmail());
            preparador.executeUpdate();
            preparador.close();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Usuario findByUsername(String username) {
        String sql = "SELECT * FROM users WHERE username = ?";

        try {
            PreparedStatement preparador = this.conexion.prepareStatement(sql);
            preparador.setString(1, username);
            ResultSet tabla = preparador.executeQuery();
            if(tabla.next()){
                Usuario usuario = new Usuario();
                usuario.setId(tabla.getInt("id"));
                usuario.setUsername(tabla.getString("username"));
                usuario.setPassword(tabla.getString("password"));
                usuario.setEmail(tabla.getString("email"));
                return usuario;
            }
            preparador.close();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return null;
    }


}
