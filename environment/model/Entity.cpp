#include "Entity.hpp"

#include "nlohmann/json.hpp"

using namespace std::literals::string_literals;

/** A JSON key and value corresponding to a field. */
#define FIELD_TO_JSON(x) {#x, entity.x}

/** Get a field from JSON. */
#define FIELD_FROM_JSON(x) json.at(#x)

namespace hlt {

/**
 * Convert an Entity to JSON format.
 * @param[out] json The output JSON.
 * @param entity The entity to convert.
 */
void to_json(nlohmann::json &json, const Entity &entity) {
    json = {FIELD_TO_JSON(entity_id),
            FIELD_TO_JSON(location),
            FIELD_TO_JSON(energy)};
}

/**
 * Convert an encoded Entity from JSON format.
 * @param json The JSON.
 * @param[out] entity The converted entity.
 */
void from_json(const nlohmann::json &json, Entity &entity) {
    entity = {FIELD_FROM_JSON(entity_id),
              FIELD_FROM_JSON(location),
              FIELD_FROM_JSON(energy)};
}

/**
 * Write an Entity to bot serial format.
 * @param ostream The output stream.
 * @param entity The entity to write.
 * @return The output stream.
 */
std::ostream &operator<<(std::ostream &ostream, const Entity &entity) {
    // Output the entity ID then its energy.
    return ostream << entity.entity_id << " " << entity.energy << std::endl;
}

}
