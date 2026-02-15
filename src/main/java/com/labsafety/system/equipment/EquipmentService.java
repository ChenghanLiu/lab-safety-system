package com.labsafety.system.equipment;

import com.labsafety.system.equipment.dto.CreateEquipmentRequest;
import com.labsafety.system.equipment.dto.EquipmentResponse;
import com.labsafety.system.equipment.dto.UpdateEquipmentRequest;
import com.labsafety.system.lab.Lab;
import com.labsafety.system.lab.LabRepository;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class EquipmentService {

    private final EquipmentRepository equipmentRepository;
    private final LabRepository labRepository;

    public EquipmentService(EquipmentRepository equipmentRepository,
                            LabRepository labRepository) {
        this.equipmentRepository = equipmentRepository;
        this.labRepository = labRepository;
    }

    public EquipmentResponse create(CreateEquipmentRequest request) {

        Lab lab = labRepository.findById(request.getLabId())
                .orElseThrow(() -> new RuntimeException("Lab not found"));

        Equipment equipment = EquipmentMapper.toEntity(request, lab);

        Equipment saved = equipmentRepository.save(equipment);

        return EquipmentMapper.toResponse(saved);
    }

    public EquipmentResponse update(Long id, UpdateEquipmentRequest request) {

        Equipment equipment = equipmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Equipment not found"));

        Lab lab = labRepository.findById(request.getLabId())
                .orElseThrow(() -> new RuntimeException("Lab not found"));

        EquipmentMapper.updateEntity(equipment, request, lab);

        Equipment updated = equipmentRepository.save(equipment);

        return EquipmentMapper.toResponse(updated);
    }

    public void delete(Long id) {

        Equipment equipment = equipmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Equipment not found"));

        equipmentRepository.delete(equipment);
    }

    @Transactional(readOnly = true)
    public EquipmentResponse getById(Long id) {

        Equipment equipment = equipmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Equipment not found"));

        return EquipmentMapper.toResponse(equipment);
    }

    @Transactional(readOnly = true)
    public Page<EquipmentResponse> search(String category,
                                          Long labId,
                                          String status,
                                          Pageable pageable) {

        Specification<Equipment> specification = (root, query, cb) -> {

            List<Predicate> predicates = new ArrayList<>();

            if (category != null && !category.isBlank()) {
                predicates.add(cb.equal(root.get("category"), category));
            }

            if (labId != null) {
                predicates.add(cb.equal(root.get("lab").get("id"), labId));
            }

            if (status != null && !status.isBlank()) {
                predicates.add(cb.equal(root.get("status"), status));
            }

            return cb.and(predicates.toArray(new Predicate[0]));
        };

        Page<Equipment> page = equipmentRepository.findAll(specification, pageable);

        return page.map(EquipmentMapper::toResponse);
    }
}
