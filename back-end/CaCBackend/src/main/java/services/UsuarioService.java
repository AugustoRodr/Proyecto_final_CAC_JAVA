package services;

import domain.model.Usuario;
import infraestructure.IPersistencia;
import infraestructure.database.MySQLPersistenciaImpl;

public class UsuarioService implements IPersistencia {

    private IPersistencia persistencia = new MySQLPersistenciaImpl();

    @Override
    public void setUser(Usuario user) {
        persistencia.setUser(user);
    }

    @Override
    public Usuario findByUsername(String username) {
        return persistencia.findByUsername(username);
    }
}
