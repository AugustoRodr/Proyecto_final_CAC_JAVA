package infraestructure;

import domain.model.Usuario;

public interface IPersistencia {

    void setUser(Usuario user);

    Usuario findByUsername(String username);


}
